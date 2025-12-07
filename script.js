// Campus Life Super App - MVP
console.log("Campus Life Super App loaded");

document.addEventListener("DOMContentLoaded", () => {

  // Events page cards
  const eventCards = document.querySelectorAll("#events-list .card");
  if (eventCards.length > 0) {
    eventCards.forEach(card => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        alert("Event details will be added in the final version!");
      });
    });
  }

  // Home page feature cards
  const featureCards = document.querySelectorAll(".feature-card");
  if (featureCards.length > 0) {
    featureCards.forEach(card => {
      card.style.cursor = "pointer";
      card.addEventListener("click", () => {
        alert("Feature coming soon!");
      });
    });
  }

  // Quote placeholder
  const quoteText = document.getElementById("daily-quote");
  if (quoteText) {
    quoteText.textContent = "Fetching a motivational quote for the final project...";
  }
});


