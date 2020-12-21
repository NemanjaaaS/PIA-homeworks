const next_btn = document.querySelector(".home-box button");
const info_box = document.querySelector(".instruction-box");
const home_box = document.querySelector(".home-box");
const start_btn = document.querySelector(".instruction-box button");
const que_box = document.querySelector(".question-box");



// ako je kliknuto next dugme
next_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");	//prikazi blok sa instrukcijama
	home_box.classList.add("hideHome");     //sakrij home
}

start_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    que_box.classList.add("activeQue");
}


