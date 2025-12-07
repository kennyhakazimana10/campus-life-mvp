// Campus Life Super App - MVP
console.log("Campus Life Super App loaded");

document.addEventListener("DOMContentLoaded", () => {

  // Click events for Home page feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      if (card.textContent.includes("Campus Map")) {
        alert("A full interactive campus map will be added in the final project.");
      }
      else if (card.textContent.includes("Meal Finder")) {
        alert("Meal Finder will help you explore dining options soon!");
      }
      else if (card.textContent.includes("Study Spaces")) {
        alert("Study Spaces will show you the best places to get work done.");
      }
    });
  });

  // Quote placeholder
  const quote = document.getElementById("quote-text");
  if (quote) {
    quote.textContent = ""Your time is limited, so don't waste it living someone else's life," - Steve Jobs.";
  }
});

