<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$user = $_POST['user'];

$user = json_decode($user,true);

$email=$user["email"];

$postoji=$db->query("select * from users where userEmail='$email' or userName='$email'");


$name=$user["name"];
$Uname=$user["userName"];
$password=$user["password"];
$tip=1;
if($user["izdavac"]){
  $tip=2;

}

$sql="INSERT INTO `users`(`userNameSurname`, `userEmail`, `userPassword`, `userName`, `tip`) values('$name','$email','$password','$Uname','$tip')";


 if( mysqli_num_rows($postoji)<1){
  $db->query($sql);
  echo "Uspesno ste se registrovali";
  }
  else{
    echo "zauzeto korisnicko ime ili email";
  }

$db->close();
?>