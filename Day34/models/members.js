import {user} from "./user.js"

let borrowed = new WeakMap()

export class member extends user {
    constructor(name, email){
        super(name,email)
            let borrowedFromStorage = JSON.parse(localStorage.getItem("borrowedBooks"))

    if(!Array.isArray(borrowedFromStorage)){
        borrowedFromStorage = []
    }

    borrowed.set(this, borrowedFromStorage)
        
    }

    getRole(){
        return "member"
    }

    borrowBook(book){
   let borrowed1  = borrowed.get(this)
   borrowed1.push(book)
   book.isAvailable=false
   localStorage.setItem("borrowedBooks", JSON.stringify(borrowed1))

    }

    returnBook(bookId){

    }

    getBorrowedBooks(){
        return borrowed.get(this)
    }

}