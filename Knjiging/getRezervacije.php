<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$user = $_POST['user'];

$user = json_decode($user,true);

$uID=$user['id'];
$tip=$user['tip'];
$niz=[];

if($tip=='1'){
  #korisnik
  
  $sql="SELECT naziv, lokacija, userName, pDatum, kDatum, rezervacije.id as id FROM `smestaj`, rezervacije, users WHERE rezervacije.sID=smestaj.sID and rezervacije.uID=users.userID and DATEDIFF(pDatum, CURRENT_DATE())>0 and rezervacije.uID='$uID'";
  $rezervacije=$db->query($sql);
  foreach($rezervacije as $row){
    array_push($niz,json_encode(array('naziv'=>$row['naziv'],'lokacija'=>$row['lokacija'],'userName'=>$row['userName'], 'pDatum'=>$row['pDatum'],'kDatum'=>$row['kDatum'], 'id'=>$row['id'])));
  }
}
elseif($tip=='2'){
  $sql="SELECT naziv, lokacija, userName, pDatum, kDatum, rezervacije.id as id FROM `smestaj`, rezervacije, users WHERE rezervacije.sID=smestaj.sID and rezervacije.uID=users.userID and DATEDIFF(pDatum, CURRENT_DATE())>0 and smestaj.vlasnikID='$uID'";
  $rezervacije=$db->query($sql);
  foreach($rezervacije as $row){
    array_push($niz,json_encode(array('naziv'=>$row['naziv'],'lokacija'=>$row['lokacija'],'userName'=>$row['userName'], 'pDatum'=>$row['pDatum'],'kDatum'=>$row['kDatum'], 'id'=>$row['id'])));
  }
}

echo json_encode($niz);

 

$db->close();
?>