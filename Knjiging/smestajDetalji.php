<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$smestaj = $_POST['smestaj'];

$smestaj = json_decode($smestaj,true);

$id=$smestaj["id"];
$result=$db->query("select * from smestaj where sID='$id' ");

$podaci;

foreach ($result as $row){
  $podaci=array('adresa'=>$row['adresa'], 'brOsoba'=>$row['brOsoba'], 'brSoba'=>$row['brSoba'], 'cena'=>$row['cena'], 'internet'=>$row['internet'], 'lokacija'=>$row['lokacija'], 'naziv'=>$row['naziv'], 'opis'=>$row['opis'], 'parking'=>$row['parking'], 'pusenje'=>$row['pusenje'], 'slike'=>array());                                      
}

$slikeres=$db->query("SELECT putanja FROM fotografije where smestajID='$id'");



foreach($slikeres as $row){
  array_push($podaci['slike'], $row['putanja']);
}

$komentari=array();
$koms=$db->query("SELECT komentar, userName FROM komentari,users WHERE sID='$id' and users.userID=komentari.userID");
foreach ($koms as $kom){
  array_push($komentari, $kom);
}
$podaci['komentari']=$komentari;

$avocena=0;
$ocene=$db->query("SELECT round(avg(ocena), 1) as av FROM ocene WHERE sID='$id'");
foreach($ocene as $oc){
  $avocena=$oc['av'];
}
$podaci['ocena']=$avocena;

echo JSON_encode($podaci);








$db->close();
?>