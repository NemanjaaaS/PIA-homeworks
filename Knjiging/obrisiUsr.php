<?php
$connect = new mysqli('localhost', 'admin', 'adminjenajjaci', 'knjiging');

$user = $_POST['user'];
$user=json_decode($user, true);
$id=$user['id'];

$connect->query("DELETE from users where userID=$id");
echo '';
$connect->close();
?>
