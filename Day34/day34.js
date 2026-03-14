import { admin } from "./models/admin.js"
import { Books } from "./models/book.js"
import { member } from "./models/members.js"
import { librarySystem } from "./service/lirary.js"

console.log("welcome to day34")

let userSwitcherElem = document.getElementById("userSwitcher")
let newbookElem = document.getElementById("newbook")
let borrowedBooksElem = document.getElementById("borrowedBooks")
let bookFormElem = document.getElementById("bookForm")
let bookList = document.getElementById("bookList")
let borrowedBookListElem = document.getElementById("borrowedBookList")

let currentUser = new member("john doe", "john@gmail.com")

let library = new librarySystem()

userSwitcherElem.addEventListener("change", (e)=>{
    let selected = e.target.value

    currentUser = selected ==="admin" ? new admin("alice", "alice@gmail.com") : 
    new member("john doe", "john@gmail.com")

    newbookElem.style.display = (selected === "admin" ? "block" : "none")

    borrowedBooksElem.style.display = (selected === "admin" ? "none" : "block")
    renderBooks()
    renderBorrowed()
})

bookFormElem.addEventListener("submit", (e)=>{
    e.preventDefault()
    let title = document.getElementById("title").value
    let Author = document.getElementById("Author").value
    let genre = document.getElementById("genre").value

   let book = new Books(title, Author, genre)

   library.addBook(book)

   renderBooks()

   bookFormElem.reset()
    console.log(book)
})
 
// initial rendering

function renderBooks(){
    bookList.innerHTML = ""
    library.getAllBook().forEach(book => {
        let li = document.createElement("li")
        
        let controls = ""
        if (currentUser.getRole() === "member" && book.isAvailable){

            controls = `<button data-action = "borrow" data-id = "${book.id}">Borrow</button>`} 
            else if (currentUser.getRole() === "Admin"){
                controls =`<span>${book.isAvailable ? "Avalable" : "borrowed"}</span> `
            }

        // bookList.appendChild(li)
        
   
         
        li.innerHTML= `
        <div>
            <strong>${book.title}</strong> by ${book.author} <em>(${book.genre})       
        </div>
        ${controls}
        `
         bookList.appendChild(li)
         });

        }

function renderBorrowed(){
    borrowedBookListElem.innerHTML=""

    if (currentUser.getRole() !=="member") return

    const borrowedBooks = currentUser.getBorrowedBooks()
    borrowedBooks.forEach(book => {
        let li = document.createElement("li")

        li.innerHTML = `<div> ${book.title} by ${book.author} </div>
        <button data-action = "return" data-id="${book.id}">Return </button>
        
        `

        borrowedBookListElem.appendChild(li)
    })
}

bookList.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON"){
       let id = e.target.getAttribute("data-id")
        let action = e.target.getAttribute("data-action")
        let book1 = library.getBookById(id)

        if (book1 && action === "borrow" && currentUser.getRole() === "member" && book1.isAvailable){
                currentUser.borrowBook(book1)
                renderBooks()
                renderBorrowed()
        }
    }
})

            newbookElem.style.display = "none"
            renderBooks()
            renderBorrowed()