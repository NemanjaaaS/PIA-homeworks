<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');
$user = $_POST['user'];
$moviesInfo = json_decode($user,true);

$naslov = $moviesInfo["naslov"];

$sql= "DELETE FROM `movies` WHERE `movies`.`naslov` = '$naslov'";

$connect->query($sql);
$connect->close();

?>