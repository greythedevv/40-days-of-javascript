// 1. Create a Dynamic Tabbed Interface
// Build a clean, accessible tab component where clicking on a tab header displays the corresponding tab content. It mimics real-world use like dashboards, profile settings, or pricing plans.

// Functional Requirements
// ✅ Clicking a tab title shows the corresponding content.

// ✅ Only one tab content is visible at a time.

// ✅ The active tab should have a visual highlight.

// ✅ Add a keyboard shortcut: pressing 1, 2, or 3 switches to that tab.

// Example:

// document.addEventListener("keydown", (e) => {
//     if (e.key === "1") switchToTab(1);
//     if (e.key === "2") switchToTab(2);
//     if (e.key === "3") switchToTab(3);
//     });
// ✅ Use event delegation to handle tab clicks.

// ✅ Use classList to manage active state.

// ✅ Use a custom event to broadcast when a tab is changed (log tab name to console).

// ✅ Use stopPropagation() if needed during advanced control.

// Select parent containers
const tabHeaders = document.querySelector(".tab-headers");
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

// Main switch function
function switchToTab(tabNumber) {
  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove("active"));

  // Remove active class from all contents
  contents.forEach(content => content.classList.remove("active"));

  // Activate correct tab
  const activeTab = document.querySelector(`.tab[data-tab="${tabNumber}"]`);
  const activeContent = document.querySelector(`.content[data-tab="${tabNumber}"]`);

  if (activeTab && activeContent) {
    activeTab.classList.add("active");
    activeContent.classList.add("active");

    // Dispatch custom event
    const tabChangedEvent = new CustomEvent("tabChanged", {
      detail: {
        tabNumber: tabNumber,
        tabName: activeTab.textContent.trim()
      }
    });

    document.dispatchEvent(tabChangedEvent);
  }
}

// Event Delegation for clicks
tabHeaders.addEventListener("click", function (e) {
  const clickedTab = e.target;

  if (!clickedTab.classList.contains("tab")) return;

  e.stopPropagation();

  const tabNumber = clickedTab.dataset.tab;
  switchToTab(tabNumber);
});

// Keyboard shortcut
document.addEventListener("keydown", function (e) {
  if (e.key === "1") switchToTab("1");
  if (e.key === "2") switchToTab("2");
  if (e.key === "3") switchToTab("3");
});

// Listen for custom event
document.addEventListener("tabChanged", function (e) {
  console.log(`Tab changed to: ${e.detail.tabName}`);
});