<?php
// connect to database again

include('./config/db_connect.php');

// whenever it's loaded it shows empty value
$title = $email = $content = '';
$success = '';
// if submit button pressed all array variable updated
$errors = array('email' => '', 'title' => '', 'content' => '');

// global array variable
// ehenever the submit button is pressed, condition check
if (isset($_POST['submit'])) {
    // echo htmlspecialchars($_POST['email']);
    // echo htmlspecialchars($_POST['title']);
    // echo htmlspecialchars($_POST['content']);

    // check email
    if (empty($_POST['email'])) {

        $errors['email'] = 'An email is required <br>';
    } else {
        $email = $_POST['email'];
        // builtin email validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // echo 'email must be a vaild email address';
            $errors['email'] = 'An email must be a valid address';
        }
    }
    // check title
    if (empty($_POST['title'])) {
        // echo 'An title is required <br>';
        $errors['title'] = 'An title is required <br>';
    } else {
        $title = $_POST['title'];
        //    Regular Expression:Regex
        if (!preg_match('/^[a-zA-Z\s]+$/', $title)) {
            echo 'Title must be letters and space only ';
            $errors['title'] = 'Title must be letters and spaces only';
        }
    }

    // check content
    if (empty($_POST['content'])) {
        // echo 'An content is required <br>';
        $errors['content'] = 'An content is required <br>';
    } else {
        $content = $_POST['content'];
        //    Regular Expression:Regex
        if (!preg_match('/^([a-zA-Z\s]+)(,\s*[a-zA-Z\s]*)*$/', $content)) {
            // echo 'Content must be comma separated ';
            $errors['content'] = 'Content must be comma separated';
        }
    }
    if (array_filter($errors)) {
        // echo 'error is the form';
    } else {
        // import ino ou database
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $content = mysqli_real_escape_string($conn, $_POST['content']);

        // create sql
        $sql = "INSERT INTO users(title, email, content) VALUES ('$title', '$email', '$content')";


        // save to db and check
        if (mysqli_query($conn, $sql)) {
            // successful

            $success = 'Thank you for your message!';
        } else {
            // error
            echo 'Query error' . mysqli_error($conn);
        }
    }
}
// XSS(Cross Site Scripting)

?>

