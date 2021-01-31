<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');
$user = $_POST['user'];
$moviesInfo = json_decode($user,true);
$naslov = $moviesInfo['naslov'];
$movies = $connect->query("SELECT * FROM movies where naslov = '$naslov'");


foreach($movies as $row){
    
    echo json_encode(array('naslov'=>$row['naslov'], 'opis'=>$row['opis'], 'zanr'=>$row['zanr'], 'scenarista'=>$row['scenarista'],'reziser'=>$row['reziser'], 'kuca'=>$row['kuca'],'glumci'=>$row['glumci'], 'godina'=>$row['godina'], 'slika'=>$row['slika'], 'trajanje'=>$row['trajanje'], 'ID'=>$row['ID']));

}













$connect->close();
?>