<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$user = $_POST['user'];



$niz=[];
$users=$db->query("select userNameSurname, userName, tip, userID from users where tip!=3");

foreach ($users as $row){
  array_push($niz, JSON_encode(array('ime'=>$row["userNameSurname"], 'tip'=>$row['tip'], 'id'=>$row["userID"], 'userName'=>$row['userName'])));
}

echo json_encode($niz);











$db->close();
?>