<?php

use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Facades\Auth;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\CustomOrdersExport;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

beforeEach(function () {
    // Mock the Excel export to prevent actual file creation during testing
    Excel::fake();
});

test('it exports orders to excel', function () {
    // Create a user and authenticate
    $user = User::factory()->create();
    Auth::login($user);

    // Create some orders associated with this user
    $orders = Order::factory()->count(3)->create([
        'user_id' => $user->id,
    ]);

    // Send a POST request to the export route
    $response = $this->post(route('orders.export'), [
        'ids' => $orders->pluck('id')->toArray(),
    ]);

    // Assert that the Excel download was triggered
    $response->assertStatus(200);
    Excel::assertDownloaded('amadast-orders-' . $user->id . '-' . date('YmdHis') . '.xlsx', function (CustomOrdersExport $export) use ($orders) {
        // Assert that the exported data matches the expected orders
        $exportedOrders = $export->array();
        
        // Compare the exported orders with the original orders
        foreach ($orders as $key => $order) {
            $this->assertEquals($exportedOrders[$key + 1]['شناسه آمادست'], $order->tracking_code); // +1 because first row is headings
            $this->assertEquals($exportedOrders[$key + 1]['شناسه سفارش فروشگاه'], $order->order_id);
            // Add additional assertions for other fields
        }

        return true;
    });
});

test('it returns an error if no orders are found', function () {
    // Create a user and authenticate
    $user = User::factory()->create();
    Auth::login($user);

    // Send a POST request with invalid IDs
    $response = $this->post(route('orders.export'), [
        'ids' => [9999], // Non-existing order IDs
    ]);

    // Assert that an error is shown
    $response->assertRedirect();
    $response->assertSessionHasErrors(); // Assuming alert()->error sets session errors
});
