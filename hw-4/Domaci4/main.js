signID2.style.display = "none";

function show_signUp(){
    signID2.style.display = "inline";
    signID.style.display = "none";
}

function show_signIn(){
    signID2.style.display = "none";
    signID.style.display = "inline";
}




function signIn(){
    let data = JSON.stringify({
        "E-mail" : document.getElementById("inputEmail").value,
        "password" : document.getElementById("inputPassword").value
    });
    console.log(data);
    $.ajax ({
        url: 'domaci.php',
        type: 'post',
        data: {user: data},
        success: function(answer){
            console.log(answer)
            
        }
    });
}

function logUp(){
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
}