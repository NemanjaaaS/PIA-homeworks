
<?php

$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');
$user = $_POST['user'];
$user = json_decode($user,true);


$users = $connect->query("SELECT * FROM users");

$zauzeto = false;
foreach($users as $row){
    if($user["e-mail"]==$row["e-mail"] || $user["username"]==$row["Username"]){
    $zauzeto = true;
    echo "E-mail or user name already taken!";
    }
}
    
      $email = $user["e-mail"];
      $nameSurname = $user["nameSurname"];
      $username = $user["username"];
      $password = $user["password"];

    
    $sql="INSERT INTO `users`(`Name_Surname`, `Username`, `E-mail`, `password`) values('$nameSurname','$username','$email','$password')";
  if($zauzeto==false){
    $connect->query($sql);
    echo "uspesno ste se registrovali";
 }



$connect->close();

?>