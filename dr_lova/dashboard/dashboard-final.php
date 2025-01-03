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
<html lang="fa" dir="rtl">

<head>
    <title>داشبورد ادمین</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Tahoma, sans-serif;
            /* فونت فارسی مناسب */
            direction: rtl;
            /* راست به چپ */
            margin: 20px;
            background-color: #f4f4f4;
            color: #333;
        }

        h1,
        h2 {
            text-align: center;
        }

        a {
            color: #007bff;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

        .container {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        form label {
            display: block;
            margin-bottom: 5px;
        }

        form input[type="time"],
        form input[type="number"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }

        form button {
            background-color: #007bff;
            color: #fff;
            padding: 10px 15px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        form button:hover {
            background-color: #0056b3;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
            border: 1px solid #ddd;
        }

        th,
        td {
            padding: 10px;
            text-align: center;
            border: 1px solid #ddd;
        }

        th {
            background-color: #f2f2f2;
        }

        .message {
            text-align: center;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
        }

        .success {
            background-color: #d4edda;
            border-color: #c3e6cb;
            color: #155724;
        }

        .error {
            background-color: #f8d7da;
            border-color: #f5c6cb;
            color: #721c24;
        }

        .actions a {
            display: inline-block;
            margin: 0 5px;
            padding: 5px 10px;
            border-radius: 3px;
        }

        .edit {
            background-color: #ffc107;
            color: #fff;
        }

        .delete {
            background-color: #dc3545;
            color: #fff;
        }
    </style>
</head>

<body>
    <div class="container">
        <h1>داشبورد ادمین</h1>
        <div style="text-align:left"><a href="logout.php">خروج</a></div>

        <h2>تنظیمات زمان</h2>

        <?php if (isset($success)): ?>
            <div class="message success"><?php echo htmlspecialchars($success); ?></div>
        <?php endif; ?>

        <?php if (isset($error)): ?>
            <div class="message error"><?php echo htmlspecialchars($error); ?></div>
        <?php endif; ?>

        <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
            <label for="start_time">زمان شروع:</label>
            <input type="time" id="start_time" name="start_time" value="<?php echo htmlspecialchars($settings['start_time'] ?? ''); ?>" required><br><br>

            <label for="end_time">زمان پایان:</label>
            <input type="time" id="end_time" name="end_time" value="<?php echo htmlspecialchars($settings['end_time'] ?? ''); ?>" required><br><br>

            <label for="interval">فاصله زمانی (دقیقه):</label>
            <input type="number" id="interval" name="interval" value="<?php echo htmlspecialchars($settings['interval'] ?? ''); ?>" required><br><br>

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
                <?php if ($reviews): ?>
                    <?php foreach ($reviews as $review): ?>
                        <tr>
                            <td><?php echo htmlspecialchars($review['name']); ?></td>
                            <td><?php echo htmlspecialchars($review['comment']); ?></td>
                            <td class="actions">
                                <a class="edit" href="?edit_review=<?php echo htmlspecialchars($review['id']); ?>">ویرایش</a>
                                <a class="delete" href="?delete_review=<?php echo htmlspecialchars($review['id']); ?>" onclick="return confirm('آیا از حذف این ریویو مطمئن هستید؟')">حذف</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                <?php else: ?>
                    <tr>
                        <td colspan="3">هیچ ریویویی یافت نشد.</td>
                    </tr>
                <?php endif; ?>
            </tbody>
        </table>
    </div>
</body>

</html>
