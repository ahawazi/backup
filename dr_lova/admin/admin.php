<?php
session_start();

// اطلاعات اتصال به پایگاه داده
$servername = "localhost";
$username = "jassminezarvan_pir";
$password = "202552565am";
$dbname = "jassminezarvan_pir";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $admin_username = $_POST["username"];
    $admin_password = $_POST["password"];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // کوئری برای بررسی نام کاربری و رمز عبور ادمین
        $stmt = $conn->prepare("SELECT * FROM admins WHERE username = :username");
        $stmt->bindParam(':username', $admin_username);
        $stmt->execute();
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($admin && password_verify($admin_password, $admin['password'])) {
            $_SESSION["admin_id"] = $admin['id'];
            header("Location: dashboard.php");
            exit();
        } else {
            $error = "نام کاربری یا رمز عبور اشتباه است.";
        }
    } catch (PDOException $e) {
        $error = "خطا در اتصال به پایگاه داده: " . $e->getMessage();
    }
    $conn = null;
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>ورود ادمین</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>

    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
            <div class="section-title">

                <h1>ورود ادمین</h1>

                <?php if (isset($error)): ?>
                    <p style="color: red;"><?php echo $error; ?></p>
                <?php endif; ?>

                <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" class="php-email-form">
                    <label for="username">نام کاربری:</label>
                    <input type="text" id="username" name="username" required><br><br>

                    <label for="password">رمز عبور:</label>
                    <input type="password" id="password" name="password" required><br><br>

                    <button type="submit">ورود</button>
                </form>
            </div>
        </div>
    </section>
</body>

</html>