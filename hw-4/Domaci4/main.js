signID2.style.display = "none";
adminID.style.display = "inline";
userHome.style.display = "none";
signID.style.display = "none";
dodajFilmID.style.display = "none";
nizFilmova.style.display = "none";

function show_signUp(){
    signID2.style.display = "inline";
    signID.style.display = "none";
}

function show_signIn(){
    signID2.style.display = "none";
    signID.style.display = "inline";
}

function show_Azuriraj(){
    adminID.style.display = "none";
    nizFilmova.style.display = "inline";
    azuriraj();
}




function signIn(){
    let data = JSON.stringify({
        "E-mail" : document.getElementById("inputEmail").value,
        "password" : document.getElementById("inputPassword").value
    });
    $.ajax ({
        url: 'domaci.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer);
            let prom= JSON.parse(answer);
            if(prom['postoji']){
                if(prom['admin']){
                    signID.style.display = "none";
                    adminID.style.display = "inline";
                    
                }
                else{
                    signID.style.display = "none";
                    userHome.style.display = "inline";
                    
                }
            }
            else{
                alert("Uneti podaci nisu tacni!");
            }
        }
    });
    
}

function signUp(){
    if(document.getElementById("inputPassword1").value != document.getElementById("inputPassword2").value){
        alert("Passwords are not the same!");
        
    }
    
    let data = JSON.stringify({
        "e-mail" : document.getElementById("inputEmail1").value,
        "nameSurname" : document.getElementById("inputNameSurname").value,
        "username" : document.getElementById("inputUsername").value,
        "password" : document.getElementById("inputPassword1").value

    });

console.log(data);
    $.ajax ({
        url: 'signUp.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer)
            
        }
});
signID.style.display = "inline";
signID2.style.display = "none";

}
function dodajFilm_btn(){

    document.getElementById("naslov").value = "";
    document.getElementById("opis").value = "";
    document.getElementById("zanr").value = "";
    document.getElementById("scenarista").value = "";
    document.getElementById("reziser").value = "";
    document.getElementById("kuca").value = "";
    document.getElementById("glumci").value = "";
    document.getElementById("godina").value = "";
    document.getElementById("slika").value = "";
    document.getElementById("trajanje").value = "";

    adminID.style.display = "none";
    dodajFilmID.style.display = "inline";

}

function addMovie(){
    if(document.getElementById("naslov").value == "" || document.getElementById("naslov")== "naslov"){
        alert("Ime filma vec postoji ili niste dodali ime!")
    }



    let data = JSON.stringify({
        "naslov" : document.getElementById("naslov").value,
        "opis" : document.getElementById("opis").value,
        "zanr" : document.getElementById("zanr").value,
        "secenarista" : document.getElementById("scenarista").value,
        "reziser" : document.getElementById("reziser").value,
        "kuca" : document.getElementById("kuca").value,
        "glumci" : document.getElementById("glumci").value,
        "godina" : document.getElementById("godina").value,
        "slika" : document.getElementById("slika").value,
        "trajanje" : document.getElementById("trajanje").value

    });
    console.log(data);
    $.ajax ({
        url: 'movies.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer)
            
        }
});
adminID.style.display = "inline";
dodajFilmID.style.display = "none";

}

function azuriraj(){
    let data;
    $.ajax ({
        url: 'getMovies.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            
            let niz= JSON.parse(answer);
            console.log(niz)
            const lista = document.getElementById("nizFilmova");


            for(let naslov of niz){
                console.log(naslov)
                lista.innerHTML += `<span>`+ naslov + `</span><div class="buttons"><button class="btn btn-sm btn-warning" onclick = "izmeni('`+naslov+`')">Izmeni</button><button class="btn btn-sm btn-warning" onclick = "obrisiFilm('`+naslov+`')">Obrisi</button></div><hr>`;
            }

        }
});
}


function obrisiFilm(movie){
    
    let data = JSON.stringify({
        "naslov" : movie

    });
    
    $.ajax ({
        url: 'delete.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer);
            
            
        }
    });


}
let movieId;


function izmeni(movie){
    
    let data = JSON.stringify({
        "naslov" : movie
        

    });

    
    $.ajax ({
        url: 'edit.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            
            console.log(answer)
            
            answer = JSON.parse(answer);
           movieId = answer['ID'];
            const izmeniFilm = document.getElementById("izmeniFilm");
            izmeniFilm.innerHTML = `<div class="row">
            <div class="col">
              <p>Naslov filma:</p>
              <input type="text" id="naslovE" value = "`+answer['naslov']+`" class="form-control" required autofocus>
              <p>Kratak opis filma:</p>
              <textarea type="text" id="opisE" class="form-control" required autofocus>`+answer['opis']+`</textarea>
              <p>Zanr:</p>
              <input type="text" id="zanrE" value = "`+answer['zanr']+`"class="form-control" required autofocus>
              <p>Scenarista:</p>
              <input type="text" id="scenaristaE" class="form-control" required autofocus>
              <p>Reziser:</p>
              <input type="text" id="reziserE"value = "`+answer['reziser']+`" class="form-control" required autofocus>
            </div>
            <div class="col">
              <p>Producentska kuca:</p>
            <input type="text" id="kucaE"value = "`+answer['kuca']+`" class="form-control" required autofocus>
            <p>Lista glumaca:</p>
            <input type="text" id="glumciE"value = "`+answer['glumci']+`" class="form-control" required autofocus>
            <p>Godina izdanja:</p>
            <input type="text" id="godinaE"value = "`+answer['godina']+`" class="form-control" required autofocus>
            <p>Slika:</p>
            <input type="text" id="slikaE"value = "`+answer['slika']+`" class="form-control" required autofocus>
            <p>Trajanje filma:</p>
            <input type="text" id="trajanjeE"value = "`+answer['trajanje']+`" class="form-control" required autofocus><br>
            </div>
            <button class="w-100 btn btn-lg btn-primary mt-5" onclick="editMovie()">Izmeni film</button><br>
          </div>`


            
        }
});
izmeniFilm.style.display = "inline";
nizFilmova.style.display = "none";

   
}



function editMovie(){
    let data = JSON.stringify({
        

        "ID" : movieId,
        "naslov" : document.getElementById("naslovE").value,
        "opis" : document.getElementById("opisE").value,
        "zanr" : document.getElementById("zanrE").value,
        "scenarista" : document.getElementById("scenaristaE").value,
        "reziser" : document.getElementById("reziserE").value,
        "kuca" : document.getElementById("kucaE").value,
        "glumci" : document.getElementById("glumciE").value,
        "godina" : document.getElementById("godinaE").value,
        "slika" : document.getElementById("slikaE").value,
        "trajanje" : document.getElementById("trajanjeE").value
    });
    
    $.ajax ({
        url: 'azuriraj.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer);
        }

});
adminID.style.display = "inline";
izmeniFilm.style.display = "none";


}