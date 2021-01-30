<?php

$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');

    if(!$connect){
        echo 'Connection error: ' . mysqli_connect_error();
    }

    $user = $_POST['user'];
    $user = json_decode($user,true);
    

    $users = $connect->query("SELECT * FROM users");

    foreach($users as $row){
      if($user["E-mail"]==$row["e-mail"]){
        if($user["password"]==$row["password"]){
          echo "sve je dobro";
        }
      }
    }

   
   
$connect->close();

?>

