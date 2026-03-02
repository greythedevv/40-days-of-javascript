// const { useCallback } = require("react");

console.log("welcome") 
// setTimeout(()=>{
//     console.log("wating done")
// }, 2000 );
console.log("end.44")

// callback


function greet (name, callback){
    console.log(`hello ${name}`)
    callback()
}

function sayBye (){
    console.log("Bye")
}

greet("great", sayBye)