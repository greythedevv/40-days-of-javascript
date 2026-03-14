export class librarySystem{
    #books
    constructor(){
        this.#books = []
    }

    addBook(book){
        this.#books.push(book)
    }

    getAvailableBook(){
        return this.#books.filter(book=> book.isAvailable)
    }

    getAllBook(){
        return this.#books
    }

    getBookById(id){
        return this.#books.find(b=>b.id===id)
    }
}