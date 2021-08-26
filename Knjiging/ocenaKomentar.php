<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$data = $_POST['podaci'];

$data = json_decode($data,true);
$tip=$data['tip'];
$userID=$data['userId'];
$sID=$data['sID'];
$prosla=false;

$prosleRez=$db->query("SELECT * FROM rezervacije where DATEDIFF(kDatum, CURRENT_DATE())<0 and sID='$sID' and uID='$userID'");
foreach($prosleRez as $row){
  $prosla=true;
  break;
}

switch($tip){
  case 'ocena':
    
    $ocena=$db->query("select count(*) as count from ocene where userID='$userID' and sID='$sID'");
    $co;
    foreach($ocena as $oc){
      $co=$oc['count'];
    }
    $ocena=$data['ocena'];
    if($co==0){
      if($prosla){
        $db->query("insert into ocene (userID, sID, ocena ) values ($userID, $sID, $ocena)");
      }
      $ocene=$db->query("SELECT round(avg(ocena), 1) as av FROM ocene WHERE sID='$sID'");
      foreach($ocene as $oc){
        $avocena=$oc['av'];
      }
    }
    else{
      if($prosla){
        $db->query("update ocene set ocena=$ocena where  userID='$userID' and sID='$sID'");
      }
      $ocene=$db->query("SELECT round(avg(ocena), 1) as av FROM ocene WHERE sID='$sID'");
      foreach($ocene as $oc){
        $avocena=$oc['av'];
      }
    }
    
    echo json_encode($avocena);
    break;
  case 'komentar':
    $komentar=$data['komentar'];
    $sql="INSERT INTO komentari (`komentar`, `sID`, `userID`) values('$komentar', '$sID','$userID')";
    if($prosla){
      $db->query($sql);
      echo "Komentar dodat";
    }else{
      echo "Nije prosla rezervacija";
    }
    

    break;
 
}




$db->close();
?>