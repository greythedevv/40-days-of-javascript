// 1. Create a form dynamically using JavaScript and manipulate its behavior
// Add input fields dynamically based on user selection e.g., text, email, number
// Add a submit button that logs all the input values as an object.
// Add a reset button that clears the form.
// Use createElement, appendChild, setAttribute, and addEventListener.

// const { text } = require("express")


let Aform = document.createElement("form")
let formName = document.createElement("input")
formName.type = "text"
formName.placeholder = "Enter your name"
let formEmail = document.createElement("input")
formEmail.type = "email"
formEmail.placeholder = "Enter your email"
let formNumber = document.createElement("input")
formNumber.type = "number"
formNumber.placeholder = "Enter your number"
let submitButton = document.createElement("button")
submitButton.type ="submit"
submitButton.innerText ="submit"

let resetButton = document.createElement("button")
resetButton.type = "reset"
resetButton.innerText= "reset"
Aform.appendChild(formName)
Aform.appendChild(formEmail)
Aform.appendChild(formNumber)
Aform.appendChild(submitButton)
Aform.appendChild(resetButton)
document.body.appendChild(Aform)

Aform.addEventListener("submit", function(event){
    event.preventDefault()
    let formData = {
        name: formName.value,
        email: formEmail.value,
        number: formNumber.value
    }
    console.log(formData)
})


// 2. Add, delete, and search rows in a dynamic table
// A form to add rows (Name, Age, Role).
// Each row should have a “Delete” button to remove it.
// Add a search input that filters the rows by name.
// Use insertRow, deleteRow, and textContent/innerText.

let dynamicTable = document.createElement("table")
let headerRow = dynamicTable.insertRow()
let nameHeader = document.createElement("th")
nameHeader.textContent = "Name"
let ageHeader = document.createElement("th")
ageHeader.textContent = "Age"
let roleHeader = document.createElement("th")
roleHeader.textContent = "Role"




headerRow.appendChild(nameHeader)
headerRow.appendChild(ageHeader)
headerRow.appendChild(roleHeader)
document.body.appendChild(dynamicTable)



let addRowForm = document.createElement("form")
let nameInput = document.createElement("input")
nameInput.type = "text"
nameInput.placeholder ="Enter name"
let ageInput = document.createElement("input")
ageInput.type = "number"
ageInput.placeholder = "Enter age"
let roleInput = document.createElement("input")
roleInput.type ="text"
roleInput.placeholder = "Enter role"
let addButton = document.createElement("button")
addButton.innerText = "add row"



addRowForm.appendChild(nameInput)
addRowForm.appendChild(ageInput)
addRowForm.appendChild(roleInput)
addRowForm.appendChild(addButton)
headerRow.appendChild(addRowForm)
document.body.appendChild(addRowForm)
addRowForm.addEventListener("submit", function(event){
    event.preventDefault()

    if (nameInput.value.trim() === "" || ageInput.value.trim() === "" || roleInput.value.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }
    let newRow = dynamicTable.insertRow()
    let nameCell = newRow.insertCell()
    nameCell.textContent = nameInput.value
    let ageCell = newRow.insertCell()
    ageCell.textContent = ageInput.value
    let roleCell = newRow.insertCell()
    roleCell.textContent = roleInput.value
    let deleteButton = document.createElement("button")
    deleteButton.textContent = "Delete"
    deleteButton.onclick= function(){
        newRow.remove()
        
    }
    roleCell.appendChild(deleteButton)
    deleteButton.style.marginLeft = "10px"
   nameInput.value = ""
   ageInput.value = ""
    roleInput.value = ""

    
})

let searchInput = document.createElement("input")
searchInput.type = "text"
searchInput.placeholder = "Search by name..."

document.body.insertBefore(searchInput, dynamicTable)

searchInput.addEventListener("input", function () {
    let filter = searchInput.value.toLowerCase()
    let rows = dynamicTable.querySelectorAll("tr")

    rows.forEach((row, index) => {
        if (index === 0) return // skip header row

        let nameCell = row.cells[0]
        let text = nameCell.textContent.toLowerCase()

        row.style.display = text.includes(filter) ? "" : "none"
    })
})


// 3. Theme Switcher with Persistence
// Toggle theme using a button or switch.
// Persist the theme in localStorage and apply on page load.
// Change background and text color based on the theme.

let themeToggleButton = document.createElement("button")
themeToggleButton.innerText = "Toggle Theme"
document.body.appendChild(themeToggleButton)


themeToggleButton.addEventListener("click", function(){
    document.body.classList.toggle("toggle1")
    if(document.body.classList.contains("toggle1")){
        localStorage.setItem("theme", "dark")
    } else {
        localStorage.setItem("theme", "light")
    }
    
})

window.addEventListener("load", function(){
    let savedTheme = localStorage.getItem("theme")
    if(savedTheme === "dark"){
        document.body.classList.add("toggle1")
    }
})






