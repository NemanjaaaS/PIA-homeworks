<?php
//editovanje podataka o useru nije zavrseno
$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$user = $_POST['user'];

$user = json_decode($user,true);



$name=$user["name"];
$email=$user["email"];
$Uname=$user["userName"];
$password=$user["password"];
//update on users ... ...

$sql="INSERT INTO `users`(`userNameSurname`, `userEmail`, `userPassword`, `userName`, `tip`) values('$name','$email','$password','$Uname','$tip')";
if($exist==false){
  $db->query($sql);
   echo "uspesno ste se registrovali";
 }
$db->close();
?>