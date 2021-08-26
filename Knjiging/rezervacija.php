<?php

$db = new mysqli("localhost","admin","adminjenajjaci","knjiging");
$rez = $_POST['rez'];

$rez = json_decode($rez,true);

$pDatum=$rez['pDatum'];
$kDatum=$rez['kDatum'];
$sID=$rez['smestajID'];
$uID=$rez['userID'];

$zauzeto=false;

$sql="SELECT * from rezervacije where (pdatum BETWEEN '$pDatum' and '$kDatum') OR (kDatum BETWEEN '$pDatum' and '$kDatum') OR (pDatum<'$pDatum' AND kDatum>'$pDatum')";

$datumi=$db->query($sql);
foreach($datumi as $row){
  $zauzeto=true;
};
if($zauzeto==false){
  $sql="INSERT INTO `rezervacije`(`sID`, `uID`, `pDatum`, `kDatum`) values('$sID','$uID','$pDatum','$kDatum')";
  $db->query($sql);
  echo 'Rezervisano';
}
else{
  echo "Zauzet termin";
}

 

$db->close();
?>