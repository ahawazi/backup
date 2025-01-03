<?php
session_start();

// بررسی اینکه آیا ادمین وارد شده است یا خیر
if (!isset($_SESSION["admin_id"])) {
    header("Location: admin.php");
    exit();
}

// اطلاعات اتصال به پایگاه داده
$servername = "localhost";
$username = "jassminezarvan_pir";
$password = "202552565am";
$dbname = "jassminezarvan_pir";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // دریافت تنظیمات زمان از پایگاه داده
    $stmt = $conn->query("SELECT * FROM admin_settings");
    $settings = $stmt->fetch(PDO::FETCH_ASSOC);

    // بروزرسانی تنظیمات زمان
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update_settings"])) {
        $start_time = $_POST["start_time"];
        $end_time = $_POST["end_time"];
        $time_interval = $_POST["time_interval"];

        $stmt = $conn->prepare("UPDATE admin_settings SET start_time = :start_time, end_time = :end_time, time_interval = :time_interval");
        $stmt->bindParam(':start_time', $start_time);
        $stmt->bindParam(':end_time', $end_time);
        $stmt->bindParam(':time_interval', $time_interval);
        $stmt->execute();

        $success = "تنظیمات با موفقیت بروزرسانی شد.";
    }

    // حذف ریویو


    // دریافت ریویوها از پایگاه داده

} catch (PDOException $e) {
    $error = "خطا در اتصال به پایگاه داده: " . $e->getMessage();
}
$conn = null;
?>

<!DOCTYPE html>
<html>

<head>
    <title>داشبورد ادمین</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h1>داشبورد ادمین</h1>

    <a href="logout.php">خروج</a>

    <h2>تنظیمات زمان</h2>

    <?php if (isset($success)): ?>
        <p style="color: green;"><?php echo $success; ?></p>
    <?php endif; ?>

    <?php if (isset($error)): ?>
        <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="start_time">زمان شروع:</label>
        <input type="time" id="start_time" name="start_time" value="<?php echo $settings['start_time']; ?>" required><br><br>

        <label for="end_time">زمان پایان:</label>
        <input type="time" id="end_time" name="end_time" value="<?php echo $settings['end_time']; ?>" required><br><br>

        <label for="time_interval">فاصله زمانی (دقیقه):</label>
        <input type="number" id="time_interval" name="time_interval" value="<?php echo $settings['time_interval']; ?>" required><br><br>

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
            <?php foreach ($reviews as $review): ?>
                <tr>
                    <td><?php echo $review['name']; ?></td>
                    <td><?php echo $review['comment']; ?></td>
                    <td>
                        <a href="?edit_review=<?php echo $review['id']; ?>">ویرایش</a> |
                        <a href="?delete_review=<?php echo $review['id']; ?>" onclick="return confirm('آیا از حذف این ریویو مطمئن هستید؟')">حذف</a>
                    </td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>

</html>
