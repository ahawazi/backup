<?php
session_start();

// تنظیمات امن برای سشن
session_regenerate_id(true);

// اطلاعات اتصال به پایگاه داده
$servername = "localhost";
$username = "jassminezarvan_pir";
$password = "202552565am";
$dbname = "jassminezarvan_pir";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $admin_username = trim($_POST["username"]);
    $admin_password = trim($_POST["password"]);
    $error = null;

    try {
        // اتصال به پایگاه داده
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // کوئری برای بررسی نام کاربری
        $stmt = $conn->prepare("SELECT * FROM admins WHERE username = :username");
        $stmt->bindParam(':username', $admin_username, PDO::PARAM_STR);
        $stmt->execute();
        $admin = $stmt->fetch(PDO::FETCH_ASSOC);

        // Debugging output
        // if ($admin) {
        //     echo "Retrieved username: " . htmlspecialchars($admin['username']) . "<br>";
        //     echo "Retrieved password: " . htmlspecialchars($admin['password']) . "<br>";
        //     echo "Entered password: " . htmlspecialchars($admin_password) . "<br>";
        // }

        // بررسی وجود ادمین و اعتبار رمز عبور
        if ($admin && $admin_password === $admin['password']) {
            $_SESSION["admin_id"] = $admin['id'];
            $_SESSION["admin_username"] = $admin['username'];
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
<html lang="fa">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ورود ادمین</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <section id="contact" class="contact">
        <div class="container" data-aos="fade-up">
            <div class="section-title">
                <h1>ورود ادمین</h1>
                <?php if (isset($error)): ?>
                    <p style="color: red;"><?php echo htmlspecialchars($error); ?></p>
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