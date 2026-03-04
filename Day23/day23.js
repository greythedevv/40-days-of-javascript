let pratice = new Promise(function(resolve, reject){
    let user = {
        name : "Greatness",
        address: "akoka",
        Email: "Oluwole@gmail.com",
        password: "oluwolegreat",
        Permission: ["db","dev"]
    }
    resolve(user)
})

pratice.then(function(user){
    console.log(`${user.name}`)

    return new Promise (function(resolve, reject){
        setTimeout(() => {
            resolve("akoka")
        }, 2000);
    })
}).then(function (address) {
console.log(`user address is ${address}`)    
})

// return a simple value

pratice
.then(function (user) {
    console.log(`${user.name}`)

    return user.Email
}).then(function(Email){
    console.log(`${Email}`)
})

pratice.then(function(user){
    console.log(`Got user ${user.name}`)

    if(!user.Permission.includes("hr")){
        throw new Error ("you are not allowed to access the HR module")
    }

    return user.Email
})
.then(function(Email){
    console.log(`user email is ${Email}`)
})
.catch(function(error){
    console.log(error)
})

let promise404 = new Promise(function (resolve, reject) {
    reject(401)
})

promise404
.catch(function(error){
    console.log(error)
    if(error === 401){
        console.log("Rethrowng 401")
        throw error;
    }else{
        // do smething
    }
})
.then(function(result){
    console.log(result)
})
.catch(function(error){
    console.error(`handling ${error} here`)
})

let final1 = new Promise(function(resolve, reject){
    resolve("testing finally")
})
final1
.finally(function(){
    console.log("Running finally")
})
.then(function(result){
    console.log(result)
})

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

