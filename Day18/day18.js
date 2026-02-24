console.log("welcome to day 18");
const creatElement= document.createElement("p")
creatElement.innerText ="this is the new text added to it "
document.body.appendChild(creatElement)
// console.log(creatElement)

let grey = document.createElement("span")
grey.innerText="this is the added text"
let meee = document.querySelector("h1")
document.body.insertBefore(grey, meee)


let meee1 = document.getElementById("today")
meee1.innerHTML =",today is not for play"

let remove1 = document.getElementById("myList")
let itemToRemove = remove1.children[0];
remove1.removeChild(itemToRemove)


const image = document.querySelector("img")

image.setAttribute("src", "knowour.com")


let span = document.getElementById("grand")
console.log("parent element:", span.firstChild)
console.log("parent node:", span.parentNode)


const pratict = document.getElementById("firstbutton")

pratict.style.backgroundColor ="blue";
pratict.style.color ="white"

