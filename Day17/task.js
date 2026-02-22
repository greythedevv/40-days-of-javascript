// 1. Find the Most Frequent Word in a Paragraph
// Consider the follwoing HTML:

// <div id="text">This is a test. This test is only a test.</div>
// Now, find and display the most frequently occurring word. Also put a count of occurance beside it.

// Hints:

// Use document.querySelector() or getElementById() to select the paragraph.
// Convert the text into an array of words.
// Use querySelector() to display the most frequent word along with the count inside another <div>.



function findMostFrequent() {
    const text = document.getElementById("text").innerText;

    // Convert to lowercase and remove punctuation
    const cleanText = text.toLowerCase().replace(/[^\w\s]/g, "");

    // Convert to array
    const words = cleanText.split(" ");

    const wordCount = {};
    let maxWord = "";
    let maxCount = 0;

    words.forEach(word => {
        wordCount[word] = (wordCount[word] || 0) + 1;

        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            maxWord = word;
        }
    });

    document.getElementById("result").innerText =
        `Most frequent word: "${maxWord}" (${maxCount} times)`;
}

function applyZebra() {
    const items = document.querySelectorAll("#cars li");

    items.forEach((item, index) => {
        if (index % 2 === 0) {
            // Even index (0, 2, 4...)
            item.style.color = "white";
            item.style.backgroundColor = "black";
        } else {
            // Odd index (1, 3, 5...)
            item.style.color = "black";
            item.style.backgroundColor = "white";
        }
    });
}


//  Write different ways we can access DOM and what they returns

// 1 getElementById
// const elem = document.getElementById("myDiv");

// Returns: a single DOM element (or null if not found)

// Use case: when you know the element has a unique id

// <div id="myDiv">Hello</div>
// 2️ getElementsByClassName
// const elems = document.getElementsByClassName("card");

// Returns: a live HTMLCollection of elements

// Live means if new elements with that class are added, the collection updates automatically

// Access: you can use indexing elems[0] but not array methods directly

// <div class="card">1</div>
// <div class="card">2</div>
// 3️ getElementsByTagName
// const elems = document.getElementsByTagName("li");

// Returns: a live HTMLCollection of elements with the given tag name

// Useful for lists, tables, etc.

// <ul>
//   <li>Apple</li>
//   <li>Banana</li>
// </ul>
// 4️ querySelector
// const elem = document.querySelector("#myDiv");
// const firstCard = document.querySelector(".card");

// Returns: the first element that matches the CSS selector

// If nothing matches → returns null

// Accepts any valid CSS selector (#id, .class, tag, [attr=value], etc.)

// 5️ querySelectorAll
// const elems = document.querySelectorAll(".card");

// Returns: a static NodeList of all elements that match the CSS selector

// Static means it does NOT update if the DOM changes later

// You can use forEach on NodeList

// // document.querySelectorAll("ul li").forEach(li => console.log(li.textContent));


// 4. Find and Replpace Text Inside a Page
// Write a script that finds all occurrences of a word inside a <p> tag and replaces them with another word dynamically.

function replaceText() {
    const find = document.getElementById("findWord").value;
    const replace = document.getElementById("replaceWord").value;

    const paragraphs = document.querySelectorAll(".men");

    paragraphs.forEach((para) => {
        // Replace all occurrences using regex with global flag
        const regex = new RegExp(find, "g");
        para.textContent = para.textContent.replace(regex, replace);
    });
}


function countUniqueLinks() {
    // Grab all <a> elements
    const links = document.querySelectorAll("a");

    // Extract hrefs
    const hrefs = Array.from(links).map(link => link.href);

    // Use Set to get unique links
    const uniqueLinks = new Set(hrefs);

    // Display count
    document.getElementById("linkCount").textContent =
        `Unique links count: ${uniqueLinks.size}`;
}

// Run the function
countUniqueLinks();


