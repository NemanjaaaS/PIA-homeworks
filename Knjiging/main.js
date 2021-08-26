modal=document.getElementById('modal')
let user
let sID

     
container=document.getElementById('container')
let Album
prikaziZaUsera()
class album{
  i=0;
  niz=[]
  element
  constructor(niz,element){
    this.niz=niz
    this.element=element
  }
  right=function(){
    this.i++
    if(this.i>=this.niz.length){this.i=0}
    this.element.src=this.niz[this.i]
  }
  left=function(){
    this.i--
    if(this.i<0){this.i=this.niz.length-1}
    this.element.src=this.niz[this.i]
  }
}
function hidemodal(){
  modal.hidden=true
  window.removeEventListener("keydown",modalkeydown)
}
function modalkeydown(event){
  switch (event.key){
    case "Escape":
      hidemodal()
      break
    case "Enter":
      document.getElementById("btnSubmit").onclick()
      break
  }
}
function showmodalLogIn(){
  modal.innerHTML=`
  <div class="form-signin" id ="signID">

    <button id="btnClsLogIn" type="button" class="btn-close"  aria-label="Close" onclick="hidemodal()"></button>

    <h1>Knjiging</h1>
    <h4 class="h3 mb-3 fw-normal">Sign in</h4>
    <label for="inputEmail" class="visually-hidden">Email address</label>
    <input type="email" id="inputEmail" class="form-control" placeholder="Email or username" required autofocus>
    <label for="inputPassword" class="visually-hidden">Password</label>
    <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="checkbox mb-3"></div>
    <button id="btnSubmit" class="w-100 btn btn-lg btn-primary" onclick="signIn()" type="submit">Sign in</button>
    <p>You don't have account?</p>
    <button class="w-50 btn btn-sm btn-primary" onclick="showmodalReg()" type="submit">Sign up</button>
  </div>`
  window.addEventListener("keydown",modalkeydown)
  modal.hidden=false
}
function showmodalReg(){
  modal.innerHTML=`
  <div class="signUp" id = "signID2">
        <button id="btnClsReg" type="button" class="btn-close"  aria-label="Close" onclick="hidemodal()"></button>
        <form>            
          <h1 class="h3 mb-3 fw-normal">Sign up</h1>
          <p>E-mail:</p>
          <label for="inputEmail" class="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus><br>
          <p>Name and surname:</p>
          <label for="inputEmail" class="visually-hidden">Name and surname</label>
          <input type="text" id="inputNameSurname" class="form-control" placeholder="Name and surname" required autofocus><br>
          <p>Username:</p>
          <label for="inputUsername" class="visually-hidden">Username</label>
          <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus><br>
          <p>Password:</p>
          <label for="inputPassword1" class="visually-hidden">Re-type password</label>
          <input type="password" id="inputPassword1" class="form-control" placeholder="Password" required><br>
          <p>Confirm password:</p>
          <label for="inputPassword2" class="visually-hidden">Confirm password</label>
          <input type="password" id="inputPassword2" class="form-control" placeholder="Password" required><br>
          <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" id="checkIzdavac"> Izdavac smestaja
          </label>
        </div>
          <button id="btnSubmit" class="w-100 btn btn-lg btn-primary" onclick="signUp()">Create account</button>
          <button class="w-50 btn btn-sm btn-primary mt-3" onclick="showmodalLogIn()" >Sign in</button>
        </form>
      </div>
  `
  window.addEventListener("keydown",modalkeydown)

  modal.hidden=false

}
function showmodalDodajUsr(){
  modal.innerHTML=`
  <div class="signUp" id = "signID2">
        <button id="btnClsReg" type="button" class="btn-close"  aria-label="Close" onclick="hidemodal()"></button>
        <form>            
          <h1 class="h3 mb-3 fw-normal">Sign up</h1>
          <p>E-mail:</p>
          <label for="inputEmail" class="visually-hidden">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus><br>
          <p>Name and surname:</p>
          <label for="inputEmail" class="visually-hidden">Name and surname</label>
          <input type="text" id="inputNameSurname" class="form-control" placeholder="Name and surname" required autofocus><br>
          <p>Username:</p>
          <label for="inputUsername" class="visually-hidden">Username</label>
          <input type="text" id="inputUsername" class="form-control" placeholder="Username" required autofocus><br>
          <p>Password:</p>
          <label for="inputPassword1" class="visually-hidden">Re-type password</label>
          <input type="password" id="inputPassword1" class="form-control" placeholder="Password" required><br>
          <p>Confirm password:</p>
          <label for="inputPassword2" class="visually-hidden">Confirm password</label>
          <input type="password" id="inputPassword2" class="form-control" placeholder="Password" required><br>
          <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" id="checkIzdavac"> Izdavac smestaja
          </label>
        </div>
          <button id="btnSubmit" class="w-100 btn btn-lg btn-primary" onclick="signUp()">Dodaj korisnika</button>
        </form>
      </div>
  `
  window.addEventListener("keydown",modalkeydown)

  modal.hidden=false

}
function showRezervisi(){
  modal.innerHTML=`
  <div class="signUp" id = "rezervacijaMod">
        <button id="btnClsRez" type="button" class="btn-close"  aria-label="Close" onclick="hidemodal()"></button>
        <form>            
          <h1 class="h3 mb-2 fw-normal">Rezervisi</h1>
          <input type="date" id="rezDateBg" placeholder='Od'>
          <input type="date" id="rezDateEnd" placeholder='Do'>

        </form>
        <button class="w-50 btn btn-sm btn-primary mt-3" onclick="rezervisi()" >Rezervisi</button>

      </div>
  `


  window.addEventListener("keydown",modalkeydown)

  modal.hidden=false
}
function rezervisi(){
  if(user==undefined){
    alert('Morate se ulogovati')
    showmodalLogIn()
    return
  }
  if(user.tip!='1'){
    alert('Samo korisnici mogu da rezervisu')
    return
  }
  pDatum=document.getElementById('rezDateBg').value
  kDatum=document.getElementById('rezDateEnd').value
  if(kDatum=="" || pDatum=="" || pDatum>kDatum){
    alert("Nepravilno uneti podaci")
    return
  }
  let data=JSON.stringify({
    "pDatum" : pDatum,
    "kDatum" : kDatum,
    "userID" : user.id,
    "smestajID"  : sID
  })
  $.ajax ({
    url: 'rezervacija.php',
    type: 'post',
    data: {rez: data},
    success: function(answer) {
      if(answer=="Zauzet termin"){
        alert(answer)
        return
      }
      else{
        hidemodal()
        container.innerHTML=`<h4 class="mb-3">Payment</h4>

        <div class="my-3">
          <div class="form-check">
            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required>
            <label class="form-check-label" for="credit">Kartica</label>
          </div>
          <div class="form-check">
            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required>
            <label class="form-check-label" for="debit">Keš</label>
          </div>
          
        </div>
  
        <div class="row gy-3">
          <div class="col-md-6">
            <label for="cc-name" class="form-label">Name on card</label>
            <input type="text" class="form-control" id="cc-name" placeholder="" required>
            <small class="text-muted">Full name as displayed on card</small>
            <div class="invalid-feedback">
              Name on card is required
            </div>
          </div>
  
          <div class="col-md-6">
            <label for="cc-number" class="form-label">Credit card number</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required>
            <div class="invalid-feedback">
              Credit card number is required
            </div>
          </div>
  
          <div class="col-md-3">
            <label for="cc-expiration" class="form-label">Expiration</label>
            <input type="text" class="form-control" id="cc-expiration" placeholder="" required>
            <div class="invalid-feedback">
              Expiration date required
            </div>
          </div>
  
          <div class="col-md-3">
            <label for="cc-cvv" class="form-label">CVV</label>
            <input type="text" class="form-control" id="cc-cvv" placeholder="" required>
            <div class="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
  
        <hr class="my-4">
  
        <button class="w-100 btn btn-primary btn-lg" type="submit" onclick="prikaziZaUsera()">Potvrdi</button>
      </form>
    </div>
  </div>`
      }
    }
  });

}
function signUp(){
  if(document.getElementById("inputPassword1").value!=document.getElementById("inputPassword2").value){
    alert("pogresna sifra")
    return
  }
  let name= document.getElementById("inputNameSurname").value
  let email= document.getElementById("inputEmail").value
  let userName= document.getElementById("inputUsername").value
  let passw= document.getElementById("inputPassword1").value
  let izdavac= document.getElementById("checkIzdavac").checked
  let message='Morate uneti:'
  let kompletnaForma=true
  switch(true){
    case name=='':
      kompletnaForma=false
      message+='\n ime'
    case email=='':
      kompletnaForma=false
      message+='\n email'
    case userName=='':
      kompletnaForma=false
      message+='\n korisnicko ime'
  }
  if(!kompletnaForma){
    alert(message)
    return
  }
  if(passw==""){
    if(!confirm("Niste uneli sifru zelite li da nastavite")){
      return
    }
  }
  let data=JSON.stringify({
    "name" : name,
    "email"     : email,
    "userName"  : userName,
    "password"  : passw,
    "izdavac"   : izdavac
  })
  $.ajax ({
    url: 'registracija.php',
    type: 'post',
    data: {user: data},
    success: function(answer) {
      alert(answer)
    }
  });
  hidemodal()
}
function signIn(){
  let data=JSON.stringify({
    "email"     : document.getElementById("inputEmail").value,
    "password"  : document.getElementById("inputPassword").value
  })
  $.ajax ({
    url: 'login.php',
    type: 'post',
    data: {user: data},
    success: function(answer) {
      user = JSON.parse(answer)
      let tip=parseInt(user['tip'])
      let navbuttons = document.getElementById("navBtns")
      switch(tip){
        case 5:
          alert("pogresno korisnicko ime ili lozinka")
          break;
        case 1:
          hidemodal()
          prikaziZaUsera()
            navbuttons.innerHTML=`<div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            `+user['ime']+`
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
              <li><a class="dropdown-item" href="#" onclick="prikaziZaUsera()">Pocetna stranica</a></li>
              <li><a class="dropdown-item active" href="#" onclick="showRes()">Moje rezervacije</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" onclick="logOut()">Odjavi me</a></li>
            </ul>
          </div>` 
          break;
        case 2:
          hidemodal()
          prikazizaIzd()
          container.innerHTML=`
          <div class="album py-5 bg-light" id="karticeID">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id = "karticeSmestaji">
              <!--OVDE DODAJEM KARTICE SA SMESTAJIMA-->
            </div>
          </div>`
          karticeSmestaj=document.getElementById('karticeSmestaji')
          karticeSmestaj.innerHTML="" 
          navbuttons.innerHTML=`<div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            `+user['ime']+`
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
              <li><a class="dropdown-item" href="#" onclick="prikazizaIzd()">Pocetna stranica</a></li>
              <li><a class="dropdown-item " href="#" onclick="showRes()">Moje rezervacije</a></li>
              <li><a class="dropdown-item " href="#" onclick="dodaj()">Dodaj smestaj</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" onclick="logOut()">Odjavi me</a></li>
            </ul>
          </div>`        
        break;
        case 3:
          hidemodal()
          navbuttons.innerHTML=`<div class="btn-group">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
            `+user['ime']+`
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
              <li><a class="dropdown-item" href="#" onclick="prikazizaAdm()">Pocetna stranica</a></li>
              <li><a class="dropdown-item " href="#" onclick="showmodalDodajUsr()">Dodaj korisnika</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#" onclick="logOut()">Odjavi me</a></li>
            </ul>
          </div>`
          prikazizaAdm()
          break
      }
      
      
    }
  });
 
}
function showRes(){
  let data=JSON.stringify({
    'id':user.id,
    'tip':user.tip,

  })
  
  $.ajax ({
  url: 'getRezervacije.php',
  type: 'post',
  data: {user: data},
  success: function(answer){      
      let niz= JSON.parse(answer);
      container.innerHTML=``
      niz.forEach(element => {
        rezervacija=JSON.parse(element)
        container.innerHTML += `
        <div class='mojaRez' id="rezervacijabr`+rezervacija['id']+`" >
          <div class="row">
            <div class="imeMesto col-5">
              <h2>`+rezervacija['naziv']+`</h2>
              <h4>`+rezervacija['lokacija']+`</h4>
            </div>
            <div class="user col-2">
              <h5>`+rezervacija['userName']+`</h5>
            </div>
            <div class='datumi col-3'>
              <h5> od `+rezervacija['pDatum']+`<br> do `+rezervacija['kDatum']+`</h5>
            </div>
            <div class="buttons col-2">
              <button class="btn btn-primary" onclick='otkaziRez(`+rezervacija['id']+`)'>Otkazi</button>
            </div>
          </div>
          <hr>
        </div>
        `
      });
  }
});
}
function otkaziRez(id){
  let siguran=confirm('Jeste li sigurni da zelite da otkazete?')
  if(!siguran){return}
  let data=JSON.stringify({
    'id':id
  })
  $.ajax ({
  url: 'obrisiRez.php',
  type: 'post',
  data: {rez: data},
  success: function(answer){
    document.getElementById('rezervacijabr'+id).remove()
  }})

}
function dodaj(){
  container.innerHTML=`
  <div id = "dodajSmestajID">
  
  

  <div class="row">
    <div class="col">
      <p>Naziv smestaja:</p>
      <input type="text" id="nazivSmestaja" class="form-control" required autofocus>
      <p>Opis:</p>
      <textarea type="text" id="opisSmestaja" class="form-control" required autofocus></textarea>
      <p>Grad:</p>
      <input type="text" id="gradSmestaja" class="form-control" required autofocus>
      <p>Adresa:</p>
      <input type="text" id="adresaSmestaja" class="form-control" required autofocus>
      
    </div>
    <div class="col">
      <p>Broj osoba:</p>
      <input type="number" id="brOsoba" min=1 max=10 step=1>
      <p>Broj soba:</p>
      <input type="number" id="brSoba" min=1 max=10 step=1> <br>
    
    <label>Wi-fi:
      <input type="checkbox" value="remember-me" id="wifi">
    </label>
    
    <br>
    <label> Parking
      <input type="checkbox" value="remember-me" id="parking">
    </label>
    <br>
    <label> Pusenje
      <input type="checkbox" value="remember-me" id="pusenje">
    </label>
    <p>Slike:</p>
    <input type="text" id="slike" class="form-control" required autofocus placeholder="Unesite putanje sa tacno jedim razmakom"><br>
    <p>Cena (€):</p>
      <input type="number" id="cenaID" min=1 step=1 placeholder="€">
    </div>
    <button class="w-100 btn btn-lg btn-primary mt-5" onclick="addSmestaj()">Dodaj smestaj</button><br>
    
  </div>
  
    

  </div>
  `
}

function logOut(){
  document.getElementById("navBtns").innerHTML=` <button class="btn btn-primary" id="idReg" type="button" onclick="showmodalReg()">Registrujete se</button>
  <button class="btn btn-primary" id="idLog" type="button" onclick="showmodalLogIn()">Ulogujte se</button>`
  user=undefined
  prikaziZaUsera()
}
function prikaziZaUsera(){
  let data;
  container.innerHTML=`
  <div id="search">
    <input type="text" id="schText" placeholder='Pretrazi'>
    <input type="date" id="schDateBg" placeholder='Od'>
    <input type="date" id="schDateEnd" placeholder='Do'>
    <input type="number" id="schNum" min=1 max=10 step=1 placeholder='Broj osoba'>
    <button class="btn btn-primary" type="button" onclick="pretrazi()">Pretrazi</button>
  </div>
  <div class="album py-5 bg-light" id="karticeID">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id = "karticeSmestaji">
      <!--OVDE DODAJEM KARTICE SA SMESTAJIMA-->
    </div>
  </div>`  
  $.ajax ({
  url: 'getsmestaj.php',
  type: 'post',
  data: {user: data},
  success: function(answer){      
      let niz= JSON.parse(answer);
      karticeSmestaj = document.getElementById("karticeSmestaji");
      niz.forEach(element => {
        smestaj=JSON.parse(element)
        karticeSmestaj.innerHTML += `
        <div class = "slike"> <div class="col">
          <div class="card shadow-sm" onclick="prikaziSmestaj(`+smestaj["id"] +`)">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="`+smestaj['slika']+`"></img>
              <div class="card-body" style="height:200px; overflow:hidden;">
              <h3>`+smestaj['naziv']+`</h3>
                <p class="card-text" >`+smestaj['opis']+`</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                             
                  </div>
                  <small class="text-muted">`+smestaj['cena']+` €</small>
                </div>
              </div>
            </div>
          </div>
        </div>`
      });
  }
});
}
function prikazizaIzd(){
    let data=JSON.stringify({
    'id':user.id
  })
  container.innerHTML=`
  <div class="album py-5 bg-light" id="karticeID">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id = "karticeSmestaji">
      <!--OVDE DODAJEM KARTICE SA SMESTAJIMA-->
    </div>
  </div>`  
  $.ajax ({
  url: 'getsmestajIzd.php',
  type: 'post',
  data: {user: data},
  success: function(answer){      
      let niz= JSON.parse(answer);
      karticeSmestaj = document.getElementById("karticeSmestaji");
      karticeSmestaj.innerHTML=""
      niz.forEach(element => {
        smestaj=JSON.parse(element)
        karticeSmestaj.innerHTML += `
        <div class = "slike" id='idSmestajSlika`+smestaj["id"] +`'> <div class="col">
          <div class="card shadow-sm" >
            <img onclick="prikaziSmestajIzd(`+smestaj["id"] +`)" class="bd-placeholder-img card-img-top" width="100%" height="225" src="`+smestaj['slika']+`"></img>
              <div class="card-body" style="height:200px; overflow:hidden;">
              <h3>`+smestaj['naziv']+`</h3>
                <p class="card-text">`+smestaj['opis']+`</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="prikaziUredi(`+smestaj["id"] +`)">Uredi</button>
                  <button type="button" class="btn btn-sm btn-outline-secondary" onclick="izbrisiSmestaj(`+smestaj["id"] +`)">Izbrisi</button>
                  </div>
                  <small class="text-muted">`+smestaj['cena']+` €</small>
                </div>
              </div>
            </div>
          </div>
        </div>`
      });
  }
});
}
function prikazizaAdm(){
  let data=JSON.stringify({
  })
  
  $.ajax ({
  url: 'getUsers.php',
  type: 'post',
  data: {user: data},
  success: function(answer){      
      let niz= JSON.parse(answer);
      container.innerHTML=``
      niz.forEach(element => {
        user=JSON.parse(element)
        container.innerHTML += `
        <div class='mojaRez' id="userBr`+user['id']+`" >
          <div class="row">
            <div class="imeMesto col-4">
              <h2>`+user['ime']+`</h2>
              <h4>`+user['userName']+`</h4>
            </div>

            <div class='datumi col-2'>
              <h5>Tip: `+user['tip']+`</h5>
              <p>1-korisnik, 2-izdavac</p>
            </div>
            <div class="user col-3">
            
          </div>
            <div class="buttons col-3">
              <button class="btn btn-primary" onclick='urediUsr(`+user['id']+`)'>Uredi</button>
              <button class="btn btn-danger" onclick='obrisiUsr(`+user['id']+`)'>Obrisi</button>
            </div>
          </div>
          <hr>
        </div>
        `
      });
  }
});
}
function obrisiUsr(id){
  let siguran=confirm('Jeste li sigurni da zelite da obrisete?')
  if(!siguran){return}
  let data=JSON.stringify({
    'id':id
  })
  $.ajax ({
  url: 'obrisiUsr.php',
  type: 'post',
  data: {user: data},
  success: function(answer){
    document.getElementById('userBr'+id).remove()
  }})
}
function prikaziUredi(id){

  let data=JSON.stringify({
    'id':id
  })
  sID=id
  $.ajax ({
  url: 'smestajDetalji.php',
  type: 'post',
  data: {smestaj: data},
  success: function(answer){
    answer=JSON.parse(answer)

    if(answer['internet']=="1"){
      answer['internet']='checked'
    }
    else{
      answer['internet']=''
    }
    if(answer['pusenje']=="1"){
      answer['pusenje']='checked'
    }
    else{
      answer['pusenje']=''
    }
    if(answer['parking']=="1"){
      answer['parking']='checked'
    }
    else{
      answer['parking']=''
    }
    container.innerHTML=`
    <div id = "dodajSmestajID">
    
    
  
    <div class="row">
      <div class="col">
        <p>Naziv smestaja:</p>
        <input type="text" id="nazivSmestaja" class="form-control" required autofocus value='`+answer['naziv']+`'>
        <p>Opis:</p>
        <textarea type="text" id="opisSmestaja" class="form-control" required autofocus>`+answer['opis']+`</textarea>
        <p>Grad:</p>
        <input type="text" id="gradSmestaja" class="form-control" required autofocus value='`+answer['lokacija']+`'>
        <p>Adresa:</p>
        <input type="text" id="adresaSmestaja" class="form-control" required autofocus value='`+answer['adresa']+`'>
        
      </div>
      <div class="col">
        <p>Broj osoba:</p>
        <input type="number" id="brOsoba" min=1 max=10 step=1 value='`+answer['brOsoba']+`'>
        <p>Broj soba:</p>
        <input type="number" id="brSoba" min=1 max=10 step=1 value='`+answer['brSoba']+`'> <br>
      
      <label>Wi-fi:
        <input type="checkbox" value="remember-me" id="wifi" `+answer['internet']+`>
      </label>
      
      <br>
      <label> Parking
        <input type="checkbox" value="remember-me" id="parking" `+answer['parking']+`>
      </label>
      <br>
      <label> Pusenje
        <input type="checkbox" value="remember-me" id="pusenje" `+answer['pusenje']+`>
      </label>
      <p>Slike:</p>
      <input type="text" id="slike" class="form-control" required autofocus value='`+answer['slike'].join(' ')+`' placeholder="Unesite putanje sa tacno jedim razmakom"><br>
      <p>Cena (€):</p>
        <input type="number" id="cenaID" min=1 step=1 placeholder="€" value='`+answer['cena']+`'>
      </div>
      <button class="w-100 btn btn-lg btn-primary mt-5" onclick="sacuvajPromene(`+id+`)">Sacuvaj promene</button><br>
      
    </div>
    
      
  
    </div>
    `
  }
  });


}
function sacuvajPromene(id){
  slike=[]
  slikeInput=document.getElementById("slike").value.split(" ")
    for(i=0;i<slikeInput.length;i++){
    if(i==0){
      slike.push("('1', '"+slikeInput[i]+"', (select max(sID) from smestaj))")
    }
    else{
      slike.push("('0', '"+slikeInput[i]+"', (select max(sID) from smestaj))")
    }
  }
  slike=slike.join()
  
  let data = JSON.stringify({
    "naziv" : document.getElementById("nazivSmestaja").value,
    "opisSmestaja" : document.getElementById("opisSmestaja").value,
    "lokacija" : document.getElementById("gradSmestaja").value,
    "adresa" : document.getElementById("adresaSmestaja").value,
    "brOsoba" : document.getElementById("brOsoba").value,
    "brSoba" : document.getElementById("brSoba").value,
    "wifi" : document.getElementById("wifi").checked,
    "parking" : document.getElementById("parking").checked,
    "pusenje" : document.getElementById("pusenje").checked,
    "slike" : slike,
    "cena" : document.getElementById("cenaID").value,
    "vlasnikID": user.id,
    "sID" : id

  });
  
  $.ajax ({
      url: 'updateSmestaj.php',
      type: 'post',
      data: {smestaj: data},
      success: function(answer){
        
      }
  });
  prikazizaIzd()





}
function izbrisiSmestaj(id){
  let siguran=confirm('Jeste li sigurni da zelite da obrisete?')
  if(!siguran){return}
  let data=JSON.stringify({
    'id':id
  })
  $.ajax ({
  url: 'obrisiSmestaj.php',
  type: 'post',
  data: {smestaj: data},
  success: function(answer){
    document.getElementById('idSmestajSlika'+id).remove()
  }})

}
function yesorno(bool){
  if(bool){
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="green" class="bi bi-check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
        </svg>
    `
  }
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="red" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>
  `
}
function komentariStr(nizKom){
  let kom=''
  nizKom.forEach(element=>{
    kom+=`
    <div class="media">

    <div class="media-body">
        <h4 class="media-heading">`+element['userName']+`</h4>
        <p>`+element['komentar']+`</p>    

    </div>
</div>
    `
  })
  return kom
}
function prikaziSmestajIzd(id){
  let data=JSON.stringify({
    'id':id
  })
  sID=id
  $.ajax ({
  url: 'smestajDetalji.php',
  type: 'post',
  data: {smestaj: data},
  success: function(answer){
      answer=JSON.parse(answer)
      if(answer['ocena']==null){
        answer['ocena']=''
      }
      container.innerHTML=`
      <div class="row" id="prikazSmestaja">
      <div class="col-8">
         <div  id="divSlika">
           <img src='`+answer['slike'][0] +`' alt='greska' id="slikaID">
       

           <button id="prevBtn" onclick="Album.left()">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button id='nextBtn' onclick="Album.right()">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
       </div>
       <div class="col-4" id="podaciSmestaj">
         <h1>`+answer['naziv'] +`</h1>
         <hr>
         <div class="row" id="red1">
           <div class="col">
             <h3>`+answer['lokacija'] +`</h3>
             <h6>`+answer['adresa'] +`</h6>
             <table>
               <tbody>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
                     <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                     <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                   </svg>
                  </td>
                  <td>
                   `+ yesorno(Number(answer['internet']))+`
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-file-ppt" viewBox="0 0 16 16">
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                     <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z"/>
                   </svg>
                  </td>
                  <td>
                  `+ yesorno(Number(answer['parking']))+`
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="smoking" class="svg-inline--fa fa-smoking fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M632 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zM553.3 87.1c-5.7-3.8-9.3-10-9.3-16.8V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v62.3c0 22 10.2 43.4 28.6 55.4 42.2 27.3 67.4 73.8 67.4 124V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-65.5-32.4-126.2-86.7-162.6zM432 352H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zm-32 112H224v-64h176v64zm87.7-322.4C463.8 125 448 99.3 448 70.3V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v66.4c0 43.7 24.6 81.6 60.3 106.7 22.4 15.7 35.7 41.2 35.7 68.6V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-43.3-21-83.4-56.3-108.1zM536 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"/></svg>
                  </td>
                  <td>
                  `+ yesorno(Number(answer['pusenje']))+`
                  </td>
                 </tr>

               </tbody>
             </table>
           </div>
           <div class="col" id="zvezdaId">
             <span id="ocenaid" style="font-size: 30px; font-weight: bold;">`+answer['ocena']+`

               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
               </svg>
             </span>
             
           </div>
       
         </div>
         <div class="row" id="red2">
           <div class="col" style="font-size: 20px; font-weight: bold;">
           `+answer['cena'] +`€
           </div>
           <div class="col">
           </div>
           
         </div>
       </div>

       <p id="opis">broj soba: `+answer['brSoba'] +` <br> broj osoba: `+answer['brOsoba'] +` <br><br> `+answer['opis'] +`
      
       </p>
       <hr>
               <!--COMMENT SECTION-->
       <section class="content-item" id="comments">
           <div class="container">   
             <div class="row">
                   <div class="col-sm-12" id="komentarID">   
                       
                       `+komentariStr(answer['komentari'])+`
                       
                   </div>
               </div>
           </div>
       </section>
   </div>
      `
      Album=new album(answer['slike'],document.getElementById("slikaID"))

  }
});
}
function prikaziSmestaj(id){
  let data=JSON.stringify({
    'id':id
  })
  sID=id
  $.ajax ({
  url: 'smestajDetalji.php',
  type: 'post',
  data: {smestaj: data},
  success: function(answer){
      answer=JSON.parse(answer)
      if(answer['ocena']==null){
        answer['ocena']=''
      }
      container.innerHTML=`
      <div class="row" id="prikazSmestaja">
      <div class="col-8">
         <div  id="divSlika">
           <img src='`+answer['slike'][0] +`' alt='greska' id="slikaID">
       

           <button id="prevBtn" onclick="Album.left()">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button id='nextBtn' onclick="Album.right()">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
       </div>
       <div class="col-4" id="podaciSmestaj">
         <h1>`+answer['naziv'] +`</h1>
         <hr>
         <div class="row" id="red1">
           <div class="col">
             <h3>`+answer['lokacija'] +`</h3>
             <h6>`+answer['adresa'] +`</h6>
             <table>
               <tbody>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-wifi" viewBox="0 0 16 16">
                     <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
                     <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
                   </svg>
                  </td>
                  <td>
                   `+ yesorno(Number(answer['internet']))+`
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="blue" class="bi bi-file-ppt" viewBox="0 0 16 16">
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                     <path d="M6 5a1 1 0 0 1 1-1h1.188a2.75 2.75 0 0 1 0 5.5H7v2a.5.5 0 0 1-1 0V5zm1 3.5h1.188a1.75 1.75 0 1 0 0-3.5H7v3.5z"/>
                   </svg>
                  </td>
                  <td>
                  `+ yesorno(Number(answer['parking']))+`
                  </td>
                 </tr>
                 <tr>
                  <td>
                   <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="smoking" class="svg-inline--fa fa-smoking fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M632 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zM553.3 87.1c-5.7-3.8-9.3-10-9.3-16.8V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v62.3c0 22 10.2 43.4 28.6 55.4 42.2 27.3 67.4 73.8 67.4 124V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-65.5-32.4-126.2-86.7-162.6zM432 352H48c-26.5 0-48 21.5-48 48v64c0 26.5 21.5 48 48 48h384c8.8 0 16-7.2 16-16V368c0-8.8-7.2-16-16-16zm-32 112H224v-64h176v64zm87.7-322.4C463.8 125 448 99.3 448 70.3V8c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v66.4c0 43.7 24.6 81.6 60.3 106.7 22.4 15.7 35.7 41.2 35.7 68.6V280c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-30.3c0-43.3-21-83.4-56.3-108.1zM536 352h-48c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"/></svg>
                  </td>
                  <td>
                  `+ yesorno(Number(answer['pusenje']))+`
                  </td>
                 </tr>

               </tbody>
             </table>
           </div>
           <div class="col" id="zvezdaId">
             <span id="ocenaid" style="font-size: 30px; font-weight: bold;">`+answer['ocena']+`

               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
                 <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
               </svg>
             </span>
             
           </div>
       
         </div>
         <div class="row" id="red2">
           <div class="col" style="font-size: 20px; font-weight: bold;">
           `+answer['cena'] +`€
           </div>
           <div class="col">
             <button class="btn btn-primary btn-lg" id="idRezer" type="button" onclick="showRezervisi()">Rezervisite</button>
           </div>
           
         </div>
       </div>

       <p id="opis">broj soba: `+answer['brSoba'] +` <br> broj osoba: `+answer['brOsoba'] +` <br><br> `+answer['opis'] +`
      
       </p>
       <h4>Ocenite nas objekat (1-5)</h4>
       <input id="inputOcena" style="width: 320px;" type="range" min="1" max="5" onChange="sacuvajOcenu()">
       <hr>
               <!--COMMENT SECTION-->
       <section class="content-item" id="comments">
           <div class="container">   
             <div class="row">
                   <div class="col-sm-12" id="komentarID">   
                       <form>
                         <h3 class="pull-left">New Comment</h3>
                       
                           <fieldset>
                               <div class="row">

                                   <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                       <textarea class="form-control" id="message" placeholder="Your message" required=""></textarea>
                                   </div>

                               </div>  
                               <button class="btn  btn-primary" onClick="sacuvajKom()">Komentarisi</button>	
                           </fieldset>
                       </form>
                       `+komentariStr(answer['komentari'])+`
                       
                   </div>
               </div>
           </div>
       </section>

     

       


   </div>
      `
      Album=new album(answer['slike'],document.getElementById("slikaID"))

  }
});
}
function sacuvajOcenu(){
  
  let data=JSON.stringify({
    'tip':'ocena',
    'userId':user.id,
    'sID':sID,
    'ocena':document.getElementById('inputOcena').value
  })
  
  $.ajax ({
  url: 'ocenaKomentar.php',
  type: 'post',
  data: {podaci: data},
  success: function(answer){
    answer=JSON.parse(answer)
    document.getElementById('ocenaid').innerHTML=answer+`
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
  }})
}
function sacuvajKom(){
  if(user==undefined){
    alert("Morate se ulogovati da bi komentarisali")
    return
  }
  komentar=document.getElementById('message').value
  if(komentar==""){
    return
  }
  let data=JSON.stringify({
    'tip':'komentar',
    'userId':user.id,
    'sID':sID,
    'komentar':komentar
  })
  $.ajax ({
  url: 'ocenaKomentar.php',
  type: 'post',
  data: {podaci: data},
  success: function(answer){
    if(answer=="Komentar dodat"){
      document.getElementById('komentarID').innerHTML+=komentariStr([{"komentar":komentar,"userName":user.userName}])

    }
    alert(answer)    
  }})
}
function addSmestaj(){
  slike=[]
  slikeInput=document.getElementById("slike").value.split(" ")
    for(i=0;i<slikeInput.length;i++){
    if(i==0){
      slike.push("('1', '"+slikeInput[i]+"', (select max(sID) from smestaj))")
    }
    else{
      slike.push("('0', '"+slikeInput[i]+"', (select max(sID) from smestaj))")
    }
  }
  slike=slike.join()
  
  let data = JSON.stringify({
    "naziv" : document.getElementById("nazivSmestaja").value,
    "opisSmestaja" : document.getElementById("opisSmestaja").value,
    "lokacija" : document.getElementById("gradSmestaja").value,
    "adresa" : document.getElementById("adresaSmestaja").value,
    "brOsoba" : document.getElementById("brOsoba").value,
    "brSoba" : document.getElementById("brSoba").value,
    "wifi" : document.getElementById("wifi").checked,
    "parking" : document.getElementById("parking").checked,
    "pusenje" : document.getElementById("pusenje").checked,
    "slike" : slike,
    "cena" : document.getElementById("cenaID").value,
    "vlasnikID": user.id

  });
  $.ajax ({
      url: 'dodajSmestaj.php',
      type: 'post',
      data: {smestaj: data},
      success: function(answer){
        
        prikaziSmestajIzd()
      }
  });

}
function pretrazi(){
  let pDatum= document.getElementById("schDateBg").value
  let kDatum= document.getElementById("schDateEnd").value
  let brOsoba= document.getElementById("schNum").value

  let tekst = document.getElementById("schText").value.toLocaleLowerCase();


  let data=JSON.stringify({
    "pDatum" : pDatum,
    "kDatum"     : kDatum,
    "brOsoba"  : brOsoba
  })
  container.innerHTML=`
  <div id="search">
    <input type="text" id="schText" placeholder='Pretrazi'>
    <input type="date" id="schDateBg" placeholder='Od'>
    <input type="date" id="schDateEnd" placeholder='Do'>
    <input type="number" id="schNum" min=1 max=10 step=1 placeholder='Broj osoba'>
    <button class="btn btn-primary" type="button" onclick="pretrazi()">Pretrazi</button>
  </div>
  <div class="album py-5 bg-light" id="karticeID">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" id = "karticeSmestaji">
      
    </div>
  </div>`  
  $.ajax ({
  url: 'search.php',
  type: 'post',
  data: {rez: data},
  success: function(answer){      
      let niz= JSON.parse(answer);
      console.log(answer)
      console.log(tekst)
      karticeSmestaj = document.getElementById("karticeSmestaji");
      karticeSmestaj.innerHTML=""
      niz.forEach(element => {
        smestaj=JSON.parse(element)
        console.log(smestaj)
        if(smestaj["naziv"].toLocaleLowerCase().includes(tekst) || smestaj["lokacija"].toLocaleLowerCase().includes(tekst)){
        karticeSmestaj.innerHTML += `
        <div class = "slike"> <div class="col">
          <div class="card shadow-sm" onclick="prikaziSmestaj(`+smestaj["id"] +`)">
            <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="`+smestaj['slika']+`"></img>
              <div class="card-body" style="height:200px; overflow:hidden;">
              <h3>`+smestaj['naziv']+`</h3>
                <p class="card-text">`+smestaj['opis']+`</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                             
                  </div>
                  <small class="text-muted">`+smestaj['cena']+` €</small>
                </div>
              </div>
            </div>
          </div>
        </div>`
        }
        

      });
  }
});
}