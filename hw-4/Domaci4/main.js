signID2.style.display = "none";
adminID.style.display = "none";
userHome.style.display = "none";
//signID.style.display = "inline";
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
    adminID.style.display = "none";
    dodajFilmID.style.display = "inline";
}

function addMovie(){
    if(document.getElementById("naslov").value == ""){
        alert("Dodajte ime filma!")
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
    const lista = document.getElementsByClassName("nizFilmova");
    $.ajax ({
        url: 'getMovies.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            
            let niz= JSON.parse(answer);
            console.log(niz)
            const lista = document.getElementById("nizFilmova");
            for(let naslov of niz){
                lista.innerHTML += `<span>`+ naslov + `</span><div class="buttons"><button class=" btn btn-sm btn-warning"">Izmeni</button><button class="btn btn-sm btn-warning"">Obrisi</button></div><hr>`;
            }

        }
});
}