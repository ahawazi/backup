<?php
session_start();

// بررسی اینکه آیا ادمین وارد شده است یا خیر
if (!isset($_SESSION["admin_id"])) {
    header("Location: admin.php");
    exit();
}

// اطلاعات اتصال به پایگاه داده (بهتر است این اطلاعات در یک فایل جداگانه باشند)
$servername = "localhost";
$username = "jassminezarvan_pir";
$password = "202552565am";
$dbname = "jassminezarvan_pir";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname;charset=utf8mb4", $username, $password); // افزودن charset
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC); // تنظیم حالت پیش‌فرض fetch

    // دریافت تنظیمات زمان از پایگاه داده (تنها یک ردیف وجود دارد، نیازی به حلقه نیست)
    $stmt = $conn->query("SELECT start_time, end_time, interval FROM admin_settings LIMIT 1"); // محدود کردن به یک نتیجه
    $settings = $stmt->fetch();

    if (!$settings) { // اگر تنظیمات وجود نداشت، مقدار پیش‌فرض قرار بده
        $settings = ['start_time' => '09:00:00', 'end_time' => '17:00:00', 'interval' => 30];
        $conn->query("INSERT INTO admin_settings (start_time, end_time, interval) VALUES ('09:00:00', '17:00:00', 30)");
    }


    // بروزرسانی تنظیمات زمان
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update_settings"])) {
        $start_time = $_POST["start_time"];
        $end_time = $_POST["end_time"];
        $interval = (int)$_POST["interval"]; // تبدیل به عدد صحیح

        try {
            $stmt = $conn->prepare("UPDATE admin_settings SET start_time = :start_time, end_time = :end_time, interval = :interval");
            $stmt->bindValue(':start_time', $start_time); // استفاده از bindValue
            $stmt->bindValue(':end_time', $end_time);
            $stmt->bindValue(':interval', $interval, PDO::PARAM_INT); // مشخص کردن نوع پارامتر
            $stmt->execute();

            $success = "تنظیمات با موفقیت بروزرسانی شد.";
        } catch (PDOException $e) {
            $error = "خطا در بروزرسانی تنظیمات: " . $e->getMessage();
        }
    }

    // حذف ریویو
    if (isset($_GET['delete_review']) && is_numeric($_GET['delete_review'])) { // بررسی عددی بودن ID
        $review_id = (int)$_GET['delete_review']; // تبدیل به عدد صحیح
        try {
            $stmt = $conn->prepare("DELETE FROM reviews WHERE id = :id");
            $stmt->bindValue(':id', $review_id, PDO::PARAM_INT); // مشخص کردن نوع پارامتر
            $stmt->execute();
            $success = "ریویو با موفقیت حذف شد.";
        } catch (PDOException $e) {
            $error = "خطا در حذف ریویو: " . $e->getMessage();
        }
    }

    // دریافت ریویوها از پایگاه داده
    $stmt = $conn->query("SELECT * FROM reviews ORDER BY id DESC");
    $reviews = $stmt->fetchAll(); // از حالت پیش‌فرض fetch استفاده می‌شود

} catch (PDOException $e) {
    $error = "خطا در اتصال به پایگاه داده: " . $e->getMessage();
}

$conn = null; // بستن اتصال
?>

<!DOCTYPE html>
<html>
<head>
    <title>داشبورد ادمین</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>داشبورد ادمین</h1>

    <a href="logout.php">خروج</a>

    <h2>تنظیمات زمان</h2>

    <?php if (isset($success)): ?>
        <p style="color: green;"><?php echo htmlspecialchars($success); ?></p>
    <?php endif; ?>

    <?php if (isset($error)): ?>
        <p style="color: red;"><?php echo htmlspecialchars($error); ?></p>
    <?php endif; ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="start_time">زمان شروع:</label>
        <input type="time" id="start_time" name="start_time" value="<?php echo htmlspecialchars($settings['start_time']); ?>" required><br><br>

        <label for="end_time">زمان پایان:</label>
        <input type="time" id="end_time" name="end_time" value="<?php echo htmlspecialchars($settings['end_time']); ?>" required><br><br>

        <label for="interval">فاصله زمانی (دقیقه):</label>
        <input type="number" id="interval" name="interval" value="<?php echo htmlspecialchars($settings['interval']); ?>" required><br><br>

        <button type="submit" name="update_settings">بروزرسانی</button>
    </form>

    <h2>ریویوها</h2>
    <table>
        <thead>
            <tr>
                <th>نام</th>
                <th>نظر</th>
                <th>عملیات</th>
            </tr>
        </thead>
        <tbody>
            <?php if ($reviews): // بررسی وجود ریویو ?>
                <?php foreach ($reviews as $review): ?>
                    <tr>
                        <td><?php echo htmlspecialchars($review['name']); ?></td>
                        <td><?php echo htmlspecialchars($review['comment']); ?></td>
                        <td>
                            <a href="?edit_review=<?php echo htmlspecialchars($review['id']); ?>">ویرایش</a> |
                            <a href="?delete_review=<?php echo htmlspecialchars($review['id']); ?>" onclick="return confirm('آیا از حذف این ریویو مطمئن هستید؟')">حذف</a>
                        </td>
                    </tr>
                <?php endforeach; ?>
            <?php else : ?>
                <tr><td colspan="3">هیچ ریویویی یافت نشد.</td></tr>
            <?php endif; ?>
        </tbody>
    </table>
</body>
</html>