<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');
$user = $_POST['user'];
$moviesInfo = json_decode($user,true);
$movies = $connect->query("SELECT * FROM movies");





$naslov = $moviesInfo["naslov"];
$opis = $moviesInfo["opis"];
$zanr = $moviesInfo["zanr"];
$scenarista = $moviesInfo["scenarista"];
$reziser = $moviesInfo["reziser"];
$kuca = $moviesInfo["kuca"];
$glumci = $moviesInfo["glumci"];
$godina = $moviesInfo["godina"];
$slika = $moviesInfo["slika"];
$trajanje = $moviesInfo["trajanje"];





$sql="INSERT INTO `movies`(`naslov`, `opis`, `zanr`, `scenarista`,`reziser`, `kuca`,`glumci`, `godina`, `slika`, `trajanje`) values('$naslov','$opis','$zanr','$scenarista','$reziser','$kuca','$glumci','$godina','$slika', '$trajanje')";
$connect->query($sql);
echo "uspesno ste dodali film";

$connect->close();
?>