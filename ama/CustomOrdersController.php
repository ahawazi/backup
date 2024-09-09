<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Exports\OrdersExport;
use Maatwebsite\Excel\Facades\Excel;
use App\Models\Order;
use App\Enumerations\CourierServiceEnum;
use App\Enumerations\ProductType;
use App\Enumerations\TransactionEnum;
use App\Models\Courier;
use App\Models\ProvinceCity;
use App\Models\Store;
use App\Models\Transaction;

class CustomOrdersController extends Controller
{
    public function export(Request $request)
    {
        $orders = [];

        $_orders = Order::where(function ($query) {
            return $query->where(Order::USER_ID, Auth::id())
                ->when(user_is_admin(), function ($query) {
                    return $query->orWhere(Order::USER_ID, '>', 0);
                })->when(user_is_courier(), function ($query) {
                    $courier = get_courier();
                    return $query->orWhere(Order::COURIER, $courier->{Courier::ID});
                });
        })
            ->with(['senderProvince', 'senderCity', 'recipientProvince', 'recipientCity', 'courierInfo', 'transactions', 'shipmentTransaction'])
            ->whereIn(Order::ID, $request->post('ids'))
            ->get();

        if ($_orders->isEmpty()) {
            alert()->error('سفارشی یافت نشد');
            return back();
        }

        $shifts = [];

        foreach ($_orders as $order) {
            $shipment = extractShipmentCode($order->{Order::SHIPMENT});

            $trackingCodes = [];
            if (!is_null($order->{Order::COURIER_TRACKING_CODES})) {
                foreach ($order->{Order::COURIER_TRACKING_CODES} as $trackingCode) {
                    $trackingCodes[] = $trackingCode['tracking_code'] ?? null;
                }
            }
            $trackingCodes = array_filter($trackingCodes);

            $orders[] = [
                'شناسه آمادست'        => $order->{Order::TRACKING_CODE},
                'شناسه سفارش فروشگاه' => $order->{Order::ORDER_ID},
                'زمان ثبت'            => jdate($order->{Order::CREATED_AT})->format('Y-m-d H:i:s'),
                'نام فروشگاه'         => $order->store->{Store::TITLE} ?? null,
                'فرستنده'             => $order->{Order::SENDER_MOBILE},
                'گیرنده'              => $order->{Order::RECIPIENT_NAME},
                'موبایل گیرنده'       => $order->{Order::RECIPIENT_MOBILE},
                'شهر گیرنده'          => $order->recipientCity->{ProvinceCity::TITLE},
                'آدرس گیرنده'         => $order->{Order::RECIPIENT_ADDRESS},
                'وزن مرسوله (گرم)'    => $order->{Order::WEIGHT},
                'ارزش مرسوله (ریال)'  => $order->{Order::VALUE},
                'نوع مرسوله'          => ProductType::getEnum($order->{Order::PRODUCT_TYPE}) ?? '-',
                'روش ارسال'           => CourierServiceEnum::getEnum($order->{Order::SHIPPING_METHOD})['title'] ?? null,
                'سرویس دهنده'         => $order->courierInfo->name ?? null,

                'کد پیگیری سرویس دهنده' => $trackingCodes && is_array($trackingCodes) ? implode(', ', $trackingCodes) : '',

                'هزینه ارسال (ریال)'           => $sendPrice = $order->transactions
                    ->whereIn(Transaction::TYPE_ENUM, [TransactionEnum::NEW_ORDER, TransactionEnum::DEPOSIT, TransactionEnum::FINAL_CLEARANCE])->sum(Transaction::AMOUNT) * -10,
                'هزینه خدمات (ریال)'           => $servicePrice = $order->transactions
                    ->whereIn(Transaction::TYPE_ENUM, [TransactionEnum::SERVICE_COMMISSION])->sum(Transaction::AMOUNT) * -10,
                'هزینه بسته بندی و چاپ (ریال)' => $packingPrice = $order->transactions
                    ->whereIn(Transaction::TYPE_ENUM, [TransactionEnum::PACKAGING])->sum(Transaction::AMOUNT) * -10,
                'هزینه جمع آوری بسته (ریال)'   => $pickupPrice = $order->transactions
                    ->whereIn(Transaction::TYPE_ENUM, [TransactionEnum::PICKED_UP])->sum(Transaction::AMOUNT) * -10,
            ];

            $shifts[$order->{Order::SHIPMENT}] = $order->{Order::SHIPMENT};
        }

        array_unshift($orders, array_keys($orders[0]));

        return Excel::download(new OrdersExport($orders), 'amadast-orders-' . Auth::id() . '-' . date('YmdHis') . '.xlsx', \Maatwebsite\Excel\Excel::XLSX);
    }
}
