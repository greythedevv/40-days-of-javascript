Day 20 of 40 Days of JavaScript

This project is part of the 40 Days of JavaScript challenge and demonstrates advanced DOM manipulation techniques, event handling, and performance optimizations. The examples cover class toggling, text highlighting, document fragments, cloning, and mutation observation.

Features
1. Navigation Menu with Active State

A navigation menu highlights the clicked list item dynamically:

When a list item is clicked, its parent <ul> is traversed.

The .active class is removed from all <li> elements.

Only the clicked <li> receives the .active class.

2. Highlight Text Using Range API

Highlights a portion of text inside a paragraph by wrapping it in a <mark> tag.

Uses document.createRange() to select a specific portion of text.

Wraps the selected portion with a <mark> element when the "highlight" button is clicked.

3. DOM Insertion Performance: DocumentFragment

Plain DOM insertion: Creates and appends 100 <li> elements one by one.

DocumentFragment insertion: Creates 100 <li> elements in a fragment and appends all at once for better performance.

4. Smart Cloner Using cloneNode

Demonstrates the difference between cloneNode(true) (deep clone with children) and cloneNode(false) (shallow clone).

Uses a <template> to clone content into the DOM.

5. MutationObserver Watcher

Monitors changes to a <div> for:

Added/removed child elements.

Class changes.

Text modifications.

Buttons are provided to trigger each type of mutation:

Add Child – appends a new <p> to the div.

Change Class – toggles a highlight class.

Change Text – modifies the text content of the div.

6. Styling

A sample class .class is provided for demonstration purposes:

.class {
    background-color: blue;
    color: white;
}
Usage

Open index.html in a browser.

Click on navigation items to see active state toggle.

Click the "highlight" button to see text highlighting.

Observe the two lists (plainList vs fragmentList) for DOM insertion performance.

Use the "Add Child", "Change Class", and "Change Text" buttons to see MutationObserver in action.

Clone content using the template example to understand cloneNode differences.

Technologies

HTML5

CSS3

Vanilla JavaScript (DOM, Events, Range API, DocumentFragment, MutationObserver)

This project is an interactive playground for exploring modern DOM APIs, cloning techniques, and performance optimization.