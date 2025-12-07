// Campus Life Super App - MVP
console.log("Campus Life Super App loaded");

// This script runs on every page, so we must check if elements exist first.
document.addEventListener("DOMContentLoaded", () => {

  // EVENTS PAGE CARD LOGIC
  const eventsList = document.getElementById("events-list");

  // Only run the event card logic if the events section exists
  if (eventsList) {
    const eventCards = eventsList.querySelectorAll(".card");

    eventCards.forEach(card => {
      card.addEventListener("click", () => {
        alert("More event details coming soon!");
      });
    });
  }

});

