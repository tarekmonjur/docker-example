<?php
try {
    $db = new PDO('mysql:host=mysql;dbname=test_db;charset=utf8mb4', 'root', 'secret');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "DB Connected";
}catch (\PDOException $e){
    echo $e->getMessage();
}

phpinfo();