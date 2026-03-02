const recipes = [
  {
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Parmesan Cheese", "Bacon"],
    instructions: "Cook pasta. Mix with eggs and cheese. Add bacon."
  },
  {
    title: "Chicken Curry",
    ingredients: ["Chicken", "Curry Powder", "Onions", "Tomatoes"],
    instructions: "Cook onions, add chicken, spices, and tomatoes."
  },
  {
    title: "Grilled Cheese Sandwich",
    ingredients: ["Bread", "Cheddar Cheese", "Butter"],
    instructions: "Butter bread, place cheese between slices, and grill."
  },
  {
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    instructions: "Stir fry vegetables and add soy sauce."
  }
];

// 1. Create a recipe book application
// Display a list of recipes with their titles and ingredients.
// When a recipe is clicked, show the instructions for that recipe.
// Use event listeners to handle user interactions and DOM manipulation to update the content.
let app = document.createElement("div");
document.body.appendChild(app);

let header = document.createElement("h1");
header.textContent = "My Recipe App";
app.appendChild(header);

let searchInput = document.createElement("input");
searchInput.placeholder = "Search recipes...";
app.appendChild(searchInput);  // ✅ search comes after header

// let searchInput = document.createElement("input")
// searchInput.placeholder = "Input your food"
recipes.forEach(recipe => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("maindiv");
    mainDiv.style.display = "none"; // hidden until searched

    let title = document.createElement("h3");
    title.textContent = recipe.title;
    title.classList.add("title");

    let ingredients = document.createElement("h4");
    ingredients.textContent = recipe.ingredients.join(", ");
    ingredients.classList.add("answer");

    let instructions = document.createElement("h4");
    instructions.textContent = recipe.instructions;
    instructions.classList.add("answer");

    mainDiv.appendChild(title);
    mainDiv.appendChild(ingredients);
    mainDiv.appendChild(instructions);

    app.appendChild(mainDiv);  // ✅ cards come after search
});

searchInput.addEventListener("input", function() {
    let input = searchInput.value.toLowerCase();

    document.querySelectorAll(".maindiv").forEach(card => {
        let titleText = card.querySelector(".title").textContent.toLowerCase();
         if (titleText.includes(input)) {
            card.style.display = "block";   // ✅ correct
        } else {
            card.style.display = "none";    // ✅ correct
        }
    });
});


// recipes.forEach(recipe => {



// let mainDiv = document.createElement("div")
// mainDiv.classList.add("maindiv")
// mainDiv.style.display = "none";

// let title = document.createElement("h3")
// title.textContent = recipe.title
// title.classList.add("title")

// let ingredients = document.createElement("h4")
// ingredients.textContent = recipe.ingredients.join(", ");
// ingredients.classList.add("answer")

// let instructions = document.createElement("h4")
// instructions.textContent = recipe.instructions
// instructions.classList.add("answer")

// mainDiv.appendChild(title)
// mainDiv.appendChild(ingredients)
// mainDiv.appendChild(instructions)

// document.body.appendChild(mainDiv)

// title.addEventListener("click", function(event){
    
//         event.stopPropagation()

    
//     let answer1 = mainDiv.querySelectorAll(".answer") 
//      answer1.forEach(answer => answer.classList.toggle("show"));
// })

    
// })

// document.addEventListener("click",function(){
//     let close = document.querySelectorAll(".answer.show")
//    close.forEach(answer => answer.classList.remove("show")) 


// })
 

// searchInput.addEventListener("input", function(){
    

//     let input = searchInput.value.toLowerCase();

//     let realSearch = document.querySelectorAll(".maindiv"); // ✅ fixed class

//     realSearch.forEach(card => {
//         let titleText = card.querySelector(".title").textContent.toLowerCase();

//         if (titleText.includes(input)) {
//             card.style.display = "block";   // ✅ correct
//         } else {
//             card.style.display = "none";    // ✅ correct
//         }
//     });
// });
 

// document.body.insertBefore(searchInput, document.body.firstChild);