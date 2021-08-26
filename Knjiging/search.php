<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$rez = $_POST['rez'];

$rez = json_decode($rez,true);

$pDatum=$rez['pDatum'];
$kDatum=$rez['kDatum'];
$brOsoba=$rez['brOsoba'];


$sql="SELECT DISTINCT s.lokacija, s.naziv, s.opis, s.cena, s.sID, f.putanja
from smestaj s, fotografije f, rezervacije r 
where s.sID=f.smestajID and f.naslovna=1 and brOsoba>=$brOsoba and s.sID not in
(SELECT sID from rezervacije rez
 where (pdatum BETWEEN '$pDatum' and '$kDatum') 
 OR (kDatum BETWEEN '$pDatum' and '$kDatum') 
 OR (pDatum<'$pDatum' AND kDatum>'$kDatum'))";
$smestaji=$db->query($sql);


$niz=[];
foreach($smestaji as $row){
    
   array_push($niz, json_encode(array('naziv'=>$row['naziv'], 'opis'=>$row['opis'], 'lokacija'=>$row['lokacija'], 'slika'=>$row['putanja'], 'cena'=>$row['cena'], 'id'=>$row['sID'])));

}
echo json_encode($niz);





$db->close();
?>
