<?php
$connect = new mysqli('localhost', 'admin', 'adminjenajjaci', 'knjiging');

$rez = $_POST['rez'];
$rez=json_decode($rez, true);
$id=$rez['id'];

$connect->query("DELETE from rezervacije where id=$id");
echo '';
$connect->close();
?>
