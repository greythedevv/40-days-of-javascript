let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

"its a normal day. because of the capital M"

let atm = 100;

if (atm % 100 === 0) {
    console.log("Withdrawal successful");
} else{
    console.log("Invalid amount");
};

let num1 = 1;
let num2 = 2;
let oprator = "+"

switch(oprator) {
    case "+" : console.log(num1 + num2); break;
    case "-" : console.log(num1 - num2); break;
    case "*" : console.log(num1 * num2); break;
    case "/" : console.log(num1 / num2); break;
    case "%" : console.log(num1 % num2); break;
    default: console.log("invalid oprator");
}

let ag = 65;

if (ag < 18){
 console.log("ticket price:","$3")
} else if (ag > 60){
    console.log ("ticket price:","$8");
} else {
    console.log("ticket price:","$10")
}

let month="March";

switch(month) {
    case "April" : console.log("Aries"); break;
    case "May" : console.log("Taurus"); break;
    case "June" : console.log("Gemini"); break;
    case "july" : console.log("Cancer"); break;
    case "August" : console.log("Leo");break;
    case "september": console.log("Virgo");break;
    case "October" : console.log("Libra");break;
    case "November" : console.log ("Scorpio");break;
    case "December" : console.log ("Sagittarius");break;
    case "january" : console.log("Capricorn");break;
    case "febuary" : console.log ("Aquarius");break;
    case "March" : console.log ("Pisces");break;
    default: console.log("unknown month");

}

let triangle = "All sides different";

switch(triangle){
case "All sides equal" : console.log ("Equilateral Triangle");break;
case "Two sides equal" : console.log ("Isosceles Triangle");break;
case "All sides different" : console.log ("Scalene Triangle");break;
default:console.log("unknown Triangle")
}