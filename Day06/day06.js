console.log("welcome to day06");

function printThis(){
    console.log("printingthiss...")
};

printThis();


 function sum(a,b,c){
    const result = a + b + c;
    // console.log(result);
    return result;
 }

 let result= sum(1,2,3);

 function double(x){
    return 2*x;
 }
 console.log (double(result));


 function calc(a,b){
    const resVar = 2*(a+b);
    console.log (resVar)
    return resVar
    
 }

 calc(2, 1);


 let resVa = calc(3,7);
 console.log(resVa);


 function add(a,b,c,d){
   const answer = a+b+c+d
    console.log(answer); 
    return answer
 }

add(2,2,2,2);


function add(a,b,c,d, ...rest){
   return me = a+b+c+d;
}

console.log(add(2,2,2,10,22,4,4,4,4))

function outer(){
   console.log ("outer");
   
    return function inner (){
      console.log("inner")
   }
}

let retFunc = outer();

console.log(retFunc())


function test() {
  console.log("hello");
}

let x = test();
console.log(x);

function foo(func) {
   console.log("foo");

    func();
}
foo(function(){
   console.log("buz")
})


function greeting(name){
   return "hello" + name;
}

console.log(greeting("gre"));



function getCamera (camera) {
   camera();
}

getCamera(function() {
   console.log("sony")
})

function returnFunc(){
   return function(){
      console.log("Hello")
   }
}
const retFun = returnFunc();
retFun();

let gree = () => {
   console.log("gjjgjjgj")
}

gree();

// iffe
(function (){
   console.log("r,,,,,l,ll,")
})();

// call stack



// recursion
// function fetchWater(count){
//    console.log("Fetching Water...", count);

//    fetchWater(count -1)
// }
// fetchWater(5)



