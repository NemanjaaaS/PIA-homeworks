<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');

$movies = $connect->query("SELECT * FROM movies");

$niz=[];
foreach($movies as $row){
    
   array_push($niz, json_encode(array('naslov'=>$row['naslov'], 'opis'=>$row['opis'], 'zanr'=>$row['zanr'], 'slika'=>$row['slika'], 'trajanje'=>$row['trajanje'])));

}
echo json_encode($niz);





$connect->close();
?>