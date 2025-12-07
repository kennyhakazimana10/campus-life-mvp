// Campus Life Super App
console.log("Campus Life Super App loaded");

document.addEventListener("DOMContentLoaded", () => {

  // EVENTS PAGE
  const eventCards = document.querySelectorAll("#events-list .card");
  eventCards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      alert("Event details will be added in the final version!");
    });
  });

  // HOME PAGE FEATURES
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach(card => {
    card.style.cursor = "pointer";
    card.addEventListener("click", () => {
      alert("Feature coming soon!");
    });
  });

  // DAILY QUOTE FIXED ID
  const quoteText = document.getElementById("quote-text");
  if (quoteText) {
    quoteText.textContent = "A fresh motivational quote will appear here in the final project!";
  }
});



