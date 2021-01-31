<?php 

$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');


$movies = $connect->query("SELECT * FROM movies");

$array=[];
foreach($movies as $row){
    array_push($array,$row["naslov"]);

}

echo json_encode($array);
?>