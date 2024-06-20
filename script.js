let fraggerClicked = false;
let iglClicked = false;
let consistentClicked = false;
let bigwinsClicked = false;

let wholeQuiz = document.querySelector(".wholeQuiz");
let retakeClix = document.querySelector(".retakeClix");
retakeClix.style.display="none";
let retakeTayson = document.querySelector(".retakeTayson");
retakeTayson.style.display="none";
let retakeBugha = document.querySelector(".retakeBugha");
retakeBugha.style.display="none";
let retakeKhanada = document.querySelector(".retakeKhanada");
retakeKhanada.style.display="none";


let results1 = document.querySelector(".results1");
results1.style.display="none";
let results2 = document.querySelector(".results2");
results2.style.display="none";
let results3 = document.querySelector(".results3");
results3.style.display="none";
let results4 = document.querySelector(".results4");
results4.style.display="none";


let fragger = document.querySelector(".frag");
fragger.addEventListener("click", function () {
    fraggerClicked = true;
    fragger.style.backgroundColor = "#34B233";
});

let igl = document.querySelector(".IG");
igl.addEventListener("click", function () {
    iglClicked = true;
    igl.style.backgroundColor = "#34B233";
});
let consistent = document.querySelector(".ConsPlace");
consistent.addEventListener("click", function () {
    consistentClicked = true;
    consistent.style.backgroundColor = "#34B233";
});
let bigwins = document.querySelector(".BigWins");
bigwins.addEventListener("click", function () {
    bigwinsClicked = true;
    bigwins.style.backgroundColor = "#34B233";
});
let result = document.querySelector(".result");
result.addEventListener("click", function () {
    if (fraggerClicked === true && bigwinsClicked === true) {
        wholeQuiz.style.display="none";
        results1.style.display="block";
        retakeClix.style.display="block";
    }
    else if (fraggerClicked === true && consistentClicked === true) {
        wholeQuiz.style.display="none";
        results2.style.display="block";
        retakeTayson.style.display="block";
    }
    else if (iglClicked === true && consistentClicked === true) {
        wholeQuiz.style.display="none";
        results3.style.display="block";
        retakeBugha.style.display="block";
    }
    else if (iglClicked === true && bigwinsClicked === true) {
        wholeQuiz.style.display="none";
        results4.style.display="block";
        retakeKhanada.style.display="block";
    }
});

retakeClix.addEventListener("click", function (){
    location.reload()
});

retakeTayson.addEventListener("click", function (){
    location.reload ()
});

retakeBugha.addEventListener("click", function (){
    location.reload ()
});

retakeKhanada.addEventListener("click", function (){
    location.reload ()
});





