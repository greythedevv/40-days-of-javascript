console.log("welcome to day 12");


let user = {
    name: "oluwole greatness adeola",
    age: 100,
    ["is admn"]: true,
}



console.log(user["is admn"])

user.hobbies = "plaing"

console.log (user.hobbies)

function Car (name, model){
    this.name = name,
    this.model = model
}

const bmw = new Car ("BMW", "v2")
console.log(bmw)


let target = {a: 5, b:7}
let source = {f: 6, h: 8}

let reAsiggn = Object.assign(target, source)
console.log(reAsiggn)



let student = {
    name: "tyruei",
    level: 100,
    parent: {
        father: "babalawo",
        mother: "iyalawo",
        sister: "sisterlawo"
    }
}


let bbb = student.parent.father
console.log(bbb)



function user2 (name, level){
    this.name = name;
    this.level = level;
}

const greatness = new user2 ("greatness", "100");
console.log(greatness)
