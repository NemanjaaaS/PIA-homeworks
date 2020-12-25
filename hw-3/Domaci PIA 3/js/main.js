const next_btn = document.querySelector(".home-box button");
const info_box = document.querySelector(".instruction-box");
const home_box = document.querySelector(".home-box");
const que_box = document.querySelector(".question-box");
const next_Que_btn = document.querySelector(".question-box footer .nextQue");
const quit_btn = document.querySelector(".question-box footer .Quit");
const start_btn = document.querySelector(".instruction-box button");
const option_list = document.querySelector(".answ");
const timeText = document.querySelector(".timer .timeLeft");
const timeCount = document.querySelector(".timer .timerSec");
const end_box = document.querySelector(".end-box");

const play_again_btn = document.querySelector(".end-box .playAgain");


// ako je kliknuto next dugme
next_btn.onclick = ()=>{
    let input = document.querySelector(".home-box input").value;
    if(input == ""){
        alert("Unesite vase ime!");
    }else{
    info_box.classList.add("activeInfo");	//prikazi blok sa instrukcijama
    home_box.classList.add("hideHome");     //sakrij home
    }
}
//ako je kliknuto start dugme
start_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    que_box.classList.add("activeQue");
    showQuetions(0); //pozivamo funkciju za prikazivanje pitanja
    startTimer(20); //startujemo tajmer
}


let que_count = 0;
let que_num = 1;
let userScore = 0;
let counter;
let questions;

fetch('questions.json')
  .then(response => response.json())
    .then(data => {questions=data
    })




//ako je kliknuto dugme next qustion
next_Que_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //proveravamo da li je brojac pitanja manji od ukupnog broja pitanja
        que_count++; //inkrementujemo brojac
        que_num++; //inkrementujemo broj pitanja
        showQuetions(que_count); 
        clearInterval(counter);
        startTimer(20); 
        
        
    }else{
        clearInterval(counter); //cistimo counter
        showEnd();
    }
}

//ukoliko je kliknuto dugme quit pozivi funkciju showEnd()
quit_btn.onclick = ()=>{
    showEnd();

}
//finkcija za pokazivanje sledeceg pitanja
function showQuetions(index){
    
    const que_text = document.querySelector(".que");

    //kreiramo nove spanove i divove za pitanja i ponudjene odgovore preko indeksa
    let que_tag = '<span>'+ questions[index].num + ". " + questions[index].question +'</span>';
    if(questions[index].options==undefined){
        que_text.innerHTML = que_tag;
        option_list.innerHTML = `<input class="answInput" type="text"><button class="Submit">Submit</button>`;
        submit_btn = document.querySelector('.Submit');
        submit_btn.onclick =()=>{
            answInputValue = document.querySelector('.answInput').value;
            if(answInputValue == questions[index].answer){
                userScore++;
            }
            clearInterval(counter);
            show_Next_Que(3);
            submit_btn.classList.add("disabled");
            

        }
    }
    else{
        let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
        que_text.innerHTML = que_tag; //dodajemo novi span za pitanja
        option_list.innerHTML = option_tag; //dodajemo novi div za ponudjene odgovore
        
        const option = option_list.querySelectorAll(".option");

        // postavljamo onclick za sve ponudjene odgovore
        for(i=0; i < option.length; i++){
                option[i].setAttribute("onclick", "optionSelected(this)");
        }
    }
}


//ukoliko je kliknuto na neki odgovor
function optionSelected(answer){
    clearInterval(counter); //ocisti brojac
    let userAns = answer.textContent; //uzimamo odgovor
    let correcAns = questions[que_count].answer; //uzimamo tacan odgovor iz niza
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ //ukoliko je odgovor tacan
        userScore += 1; //povecaj broj poena za 1
        answer.classList.add("correct"); //oboji tacan odgovor u zeleno
        
        
    
        
    }else{
        answer.classList.add("incorrect"); //oboji kliknuti odgovor u crveno

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct"); 
                
                
            }
        }
        
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //ukoliko je kliknut odgovor disable sve ponudjene odgovore
        
       
    }
    show_Next_Que(3);
    
}

function show_Next_Que(time){
    
    counter = setInterval(timer, 1000);
    function timer(){
        
        timeCount.textContent = time;
        time--; //dekrementujemo vreme
        if(time<-1){
            clearInterval(counter);
            showQuetions(que_count);
            
            
            
            const allOptions = option_list.children.length; //uzimamo vrednosti svih ponudjenih odgovora
            let correcAns = questions[que_count].answer; //uzimamo vrednost tacnih odgovora
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 

                    
                }
            }
            if(que_count < questions.length - 1){
                 //proveravamo da li je brojac pitanja manji od ukupnog broja pitanja
                que_count++; //inkrementujemo brojac
                que_num++; //inkrementujemo broj pitanja
                showQuetions(que_count);
                
              
                document.getElementsByClassName("timerSec")[0].innerText="20";
                startTimer(19); 
                
                
            }else{
                clearInterval(counter); //cistimo counter
                showEnd(); 
            }
           
        }
   
       
        
        
    }
    
    
}





function showEnd(){
    
    que_box.classList.remove("activeQue"); //sakrij question box
    end_box.classList.add("activeEnd"); //prikazi rezultat
    const scoreEnd = end_box.querySelector(".score")
    let scoreTag = '<p>'+ userScore +'</p>'
    scoreEnd.innerHTML = scoreTag; 


}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--; //dekrementujemo vreme
        if(time < 0){ 
            clearInterval(counter); 
            
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer; 
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //oboj tacan odgovor u zeleno
                    option_list.children[i].setAttribute("class", "option correct"); 

                    
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //ukoliko je kliknuto na neki ponudjen odgovor disable odgovore
                
            }
            show_Next_Que(3);
            
        }
    }
}



play_again_btn.onclick=()=>{
    end_box.classList.remove("activeEnd");
    home_box.classList.remove("hideHome");
}