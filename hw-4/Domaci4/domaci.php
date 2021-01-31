<?php

$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');

    $user = $_POST['user'];
    $user = json_decode($user,true);

    $postoji = false;
    $admin = false;
    

    $users = $connect->query("SELECT * FROM users");

    foreach($users as $row){
      if($user["E-mail"]==$row["e-mail"] || $user["E-mail"]==$row["Username"]){
        if($user["password"]==$row["password"]){
          $postoji = true;
          if($row["admin/user ID"]==1){
            
            $admin = true;

          }
          

        }
      }
    }

   echo json_encode(array('admin'=> $admin, 'postoji'=> $postoji));
   
$connect->close();

?>

