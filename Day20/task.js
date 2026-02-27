// 1. Traverse and Toggle Classes
// Build a navigation menu. On click of a list item:

// Traverse up to parent <ul>
// Remove .active class from all <li>
// Add .active only to the clicked <li>

const listItems = document.querySelectorAll('#nav-list li');

listItems.forEach(item => {
    item.addEventListener("click", function(){
    let activeOne = this.parentElement;
    

    let items = activeOne.querySelectorAll("li")
    items.forEach(li => {
        console.log("li", li)
        li.classList.remove("active")
    })
    this.classList.add("active")
    

})
})


// 2. Highlight Text Using Range
// Use the Range API to highlight a portion of a paragraph by wrapping it with a <mark> tag.
let rangeText = document.getElementById("rangeText")
let highlightBtn = document.getElementById("highlightBtn")

highlightBtn.addEventListener("click", function(){
    let textNode = rangeText.firstChild
    let textcontent = textNode.textContent

    let rangeStart = textcontent.indexOf("is")
    let rangeEnd = rangeStart + "hard".length;

    let range = document.createRange();

    range.setStart(textNode, rangeStart)
    range.setEnd(textNode, rangeEnd)

    const mark = document.createElement("mark")
    range.surroundContents(mark)
})

// 3. Use DocumentFragment for Performance
// Insert 100 list items into the DOM using:

// Plain DOM methods (one by one)
// DocumentFragment (all at once)

let plainList =document.getElementById("plainList")

for(let i = 0; i <= 100; i++){
    let list =document.createElement("li")
    list.textContent = "item" + i
    plainList.appendChild(list)
}

let fragmentList = document.getElementById("fragmentList")
let fragment = document.createDocumentFragment()

for(let i = 0; i <=100; i++){
    let list = document.createElement("li")
    list.textContent = "item" + i
    fragment.appendChild(list)
}

fragmentList.appendChild(fragment)


// Build a “Smart Cloner”
// Create a UI with an element and a “Clone” button. Use cloneNode(true) and cloneNode(false) and show the difference visually.

let template  = document.getElementById("template")
let clone = template.content.cloneNode(true)

clone.querySelector(".first-clone").textContent = "i just cloned the content with cloneNode(true)"
clone.querySelector(".second-cone").textContent = "me just cloned the content with "

document.body.appendChild(clone)



// 5. MutationObserver Watcher
// Create a div and use MutationObserver to log whenever:

// A new child is added
// The class attribute changes
// Text is modified

const watchedDiv = document.getElementById("watchedDiv");

// 1️⃣ Define the observer callback
const observerCallback = function(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === "childList") {
            console.log("A child was added or removed:", mutation);
        }
        if (mutation.type === "attributes") {
            console.log(`Attribute ${mutation.attributeName} changed:`, watchedDiv.getAttribute(mutation.attributeName));
        }
        if (mutation.type === "characterData") {
            console.log("Text content changed:", mutation.target.data);
        }
    }
};

// 2️⃣ Create the observer
const observer = new MutationObserver(observerCallback);

// 3️⃣ Start observing
observer.observe(watchedDiv, {
    childList: true,      // watch for child elements
    attributes: true,     // watch for attribute changes
    attributeFilter: ["class"], // only watch class changes
    subtree: true,        // watch inside the element
    characterData: true   // watch text node changes
});

// ✅ Buttons to trigger mutations

document.getElementById("addChildBtn").addEventListener("click", () => {
    const newChild = document.createElement("p");
    newChild.textContent = "I am a new child!";
    watchedDiv.appendChild(newChild);
});

document.getElementById("changeClassBtn").addEventListener("click", () => {
    watchedDiv.classList.toggle("highlight");
});

document.getElementById("changeTextBtn").addEventListener("click", () => {
    watchedDiv.firstChild.data = "Text has changed!";
});