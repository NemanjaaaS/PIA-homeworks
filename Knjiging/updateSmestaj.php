<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$smestaj = $_POST['smestaj'];


$smestaj = json_decode($smestaj,true);


$sID=$smestaj['sID'];
$naziv=$smestaj['naziv'];
$opis=$smestaj['opisSmestaja'];
$lokacija=$smestaj['lokacija'];
$adresa=$smestaj['adresa'];
$brOsoba=$smestaj['brOsoba'];
$brSoba=$smestaj['brSoba'];
$wifi=$smestaj['wifi'];
$parking=$smestaj['parking'];
$pusenje=$smestaj['pusenje'];
$slike=$smestaj['slike'];
$vlasnikID=$smestaj['vlasnikID'];
$cena=$smestaj['cena'];

if(!$wifi){
  $wifi='0';
}
if(!$pusenje){
  $pusenje='0';
}
if(!$parking){
  $parking='0';
}
$sql="UPDATE `smestaj` SET `vlasnikID`='$vlasnikID',`naziv`='$naziv',`lokacija`='$lokacija',`adresa`='$adresa',`brOsoba`='$brOsoba',`brSoba`='$brSoba',`cena`='$cena',`opis`='$opis',`internet`='$wifi',`pusenje`='$pusenje',`parking`='$parking' WHERE sID='$sID'";
echo $sql;
#$sql="INSERT INTO `smestaj`(`adresa`, `brOsoba`, `brSoba`, `cena`, `internet`, `lokacija`, `naziv`, `opis`, `parking`, `pusenje`, `vlasnikID`) values('$adresa','$brOsoba','$brSoba','$cena','$wifi','$lokacija','$naziv','$opis','$parking','$pusenje','$vlasnikID')";
$db->query($sql);

$sql="DELETE FROM `fotografije` where smestajID='$sID'";
$db->query($sql);

$sql="INSERT INTO `fotografije`(`naslovna`, `putanja`, `smestajID`) values $slike";
$db->query($sql);

$db->close();
?>