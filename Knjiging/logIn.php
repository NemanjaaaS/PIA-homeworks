<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$user = $_POST['user'];

$user = json_decode($user,true);

$email=$user["email"];
$pass=$user["password"];
$users=$db->query("select * from users where (userName='$email' or userEmail='$email') and userPassword='$pass'");

foreach ($users as $row){
  echo JSON_encode(array('ime'=>$row["userNameSurname"], 'tip'=>$row['tip'], 'id'=>$row["userID"], 'userName'=>$row['userName']));
}

if( mysqli_num_rows($users)<1){
  echo JSON_encode(array('ime'=>'', 'tip'=>5));
}











$db->close();
?>