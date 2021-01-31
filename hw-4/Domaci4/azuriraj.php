<?php
$connect = new mysqli('localhost', 'nemanjaas99', 'nemanjaas99', 'users');
$user = $_POST['user'];
$moviesInfo = json_decode($user,true);





$ID = $moviesInfo["ID"];
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





$sql= "UPDATE movies set naslov = '$naslov',opis = '$opis',zanr = '$zanr',scenarista = '$scenarista',reziser = '$reziser',kuca = '$kuca',glumci = '$glumci',godina = '$godina',trajanje = '$trajanje',slika = '$slika' where ID = $ID ";

$connect->query($sql);

$connect->close();
?>