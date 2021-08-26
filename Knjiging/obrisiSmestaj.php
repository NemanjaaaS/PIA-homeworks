<?php
$connect = new mysqli('localhost', 'admin', 'adminjenajjaci', 'knjiging');

$smestaj = $_POST['smestaj'];
$smestaj=json_decode($smestaj, true);
$id=$smestaj['id'];

$connect->query("DELETE from smestaj where sID=$id");
$connect->query("DELETE from fotografije where smestajID=$id");
$connect->query("DELETE from komentari where sID=$id");
$connect->query("DELETE from ocene where sID=$id");








$connect->close();
?>
