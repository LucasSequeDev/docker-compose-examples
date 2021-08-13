<h1>Hello from Docker!</h1>

<?php
    $cnn =  mysqli_connect('mysql', 'root', 'drowssap');
    if (!$cnn) {
        die('Error on connect to database: ' . mysql_error());
    }
    echo 'db is connected';
    mysqli_close($cnn);

    echo phpinfo();
?>
