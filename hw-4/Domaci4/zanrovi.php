<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');

$movies = $connect->query("SELECT * FROM movies");

$niz=[];
foreach($movies as $row){
    
   array_push($niz, $row["zanr"]);

}
echo json_encode($niz);


$connect->close();
?>