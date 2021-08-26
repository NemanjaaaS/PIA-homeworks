<?php
$connect = new mysqli('localhost', 'admin', 'adminjenajjaci', 'knjiging');

$user = $_POST['user'];
$user=json_decode($user, true);
$id=$user['id'];

$smestaji = $connect->query("SELECT s.lokacija, s.naziv, s.opis, s.cena, s.sID, f.putanja 
from smestaj s, fotografije f
where s.sID=f.smestajID and f.naslovna=1 and vlasnikID=$id");



$niz=[];
foreach($smestaji as $row){
    
   array_push($niz, json_encode(array('naziv'=>$row['naziv'], 'opis'=>$row['opis'], 'lokacija'=>$row['lokacija'], 'slika'=>$row['putanja'], 'cena'=>$row['cena'], 'id'=>$row['sID'])));

}
echo json_encode($niz);





$connect->close();
?>
