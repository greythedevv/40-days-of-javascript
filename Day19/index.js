console.log("welcome to day 19")

let submitButton = document.getElementById("submitButton")

let counter = 0
let submmitFunction = function(){
    console.log("button Clicked", counter)
    counter++
}


submitButton.addEventListener("click", submmitFunction)

submitButton.removeEventListener("click", submmitFunction)


let targetButton = document.getElementById("target").addEventListener("click", function(event){
    console.log("target button clicked")
})

let parentDiv = document.getElementById("parent").addEventListener("click", function(event){
    console.log("Parent div clicked")
})

let grandParentDiv = document.getElementById("grandParent").addEventListener("click", function(event){
    console.log("grand Parent div clicked")
})

// // capturing phase
let targetButton1= document.getElementById("target").addEventListener("click", function(event){
    console.log("target button clicked")
}, true)

let parentDiv1 = document.getElementById("parent").addEventListener("click", function(event){
    console.log("Parent div clicked")
}, true)

let grandParentDiv1 = document.getElementById("grandParent").addEventListener("click", function(event){
    console.log("grand Parent div clicked")
}, true)



console.log("Project: FAQ");



const faq = document.querySelector(".faq");

// Event Delegation: Handle clicks on all questions
faq.addEventListener("click", function (e) {
  if (e.target.classList.contains("question")) {
    e.stopPropagation();

    const currentItem = e.target.parentElement;
    const currentAnswer = currentItem.querySelector(".answer");

    currentAnswer.classList.toggle("show");
  }
});

// Click outside to collapse all
document.addEventListener("click", function () {
  const allAnswers = document.querySelectorAll(".answer.show");
  allAnswers.forEach(answer => answer.classList.remove("show"));
});

