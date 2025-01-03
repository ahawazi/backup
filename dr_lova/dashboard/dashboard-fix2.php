<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION["admin_id"])) {
    header("Location: admin.php");
    exit();
}

// Database connection details
$servername = "localhost";
$username = "jassminezarvan_pir";
$password = "202552565am";
$dbname = "jassminezarvan_pir";

// Function to connect to the database
function getDatabaseConnection($servername, $username, $password, $dbname) {
    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $conn;
    } catch (PDOException $e) {
        die("خطا در اتصال به پایگاه داده: " . $e->getMessage());
    }
}

$conn = getDatabaseConnection($servername, $username, $password, $dbname);

// Initialize messages
$success = $error = null;

// Fetch admin settings
$stmt = $conn->query("SELECT * FROM admin_settings");
$settings = $stmt->fetch(PDO::FETCH_ASSOC);

// Update settings
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["update_settings"])) {
    $start_time = trim($_POST["start_time"]);
    $end_time = trim($_POST["end_time"]);
    $interval = intval($_POST["interval"]);

    try {
        $stmt = $conn->prepare("UPDATE admin_settings SET start_time = :start_time, end_time = :end_time, interval = :interval");
        $stmt->bindParam(':start_time', $start_time);
        $stmt->bindParam(':end_time', $end_time);
        $stmt->bindParam(':interval', $interval);
        $stmt->execute();
        $success = "تنظیمات با موفقیت بروزرسانی شد.";
    } catch (PDOException $e) {
        $error = "خطا در بروزرسانی تنظیمات: " . $e->getMessage();
    }
}

// Delete review
if (isset($_GET['delete_review'])) {
    $review_id = intval($_GET['delete_review']);
    try {
        $stmt = $conn->prepare("DELETE FROM reviews WHERE id = :id");
        $stmt->bindParam(':id', $review_id);
        $stmt->execute();
        $success = "ریویو با موفقیت حذف شد.";
    } catch (PDOException $e) {
        $error = "خطا در حذف ریویو: " . $e->getMessage();
    }
}

// Fetch reviews
$stmt = $conn->query("SELECT * FROM reviews ORDER BY id DESC");
$reviews = $stmt->fetchAll(PDO::FETCH_ASSOC);

$conn = null;
?>

<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>داشبورد ادمین</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
    <header>
        <h1>داشبورد ادمین</h1>
        <a href="logout.php" class="logout-btn">خروج</a>
    </header>

    <main>
        <!-- Display Messages -->
        <?php if ($success): ?>
            <p class="success-message"><?php echo htmlspecialchars($success); ?></p>
        <?php endif; ?>
        <?php if ($error): ?>
            <p class="error-message"><?php echo htmlspecialchars($error); ?></p>
        <?php endif; ?>

        <!-- Admin Settings -->
        <section>
            <h2>تنظیمات زمان</h2>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <label for="start_time">زمان شروع:</label>
                <input type="time" id="start_time" name="start_time" value="<?php echo htmlspecialchars($settings['start_time']); ?>" required><br>

                <label for="end_time">زمان پایان:</label>
                <input type="time" id="end_time" name="end_time" value="<?php echo htmlspecialchars($settings['end_time']); ?>" required><br>

                <label for="interval">فاصله زمانی (دقیقه):</label>
                <input type="number" id="interval" name="interval" value="<?php echo htmlspecialchars($settings['interval']); ?>" required><br>

                <button type="submit" name="update_settings">بروزرسانی</button>
            </form>
        </section>

        <!-- Reviews Section -->
        <section>
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
                            <td><?php echo htmlspecialchars($review['name']); ?></td>
                            <td><?php echo htmlspecialchars($review['comment']); ?></td>
                            <td>
                                <a href="?delete_review=<?php echo intval($review['id']); ?>" onclick="return confirm('آیا از حذف این ریویو مطمئن هستید؟')">حذف</a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </section>
    </main>
</body>
</html>
