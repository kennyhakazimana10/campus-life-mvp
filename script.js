// Campus Life Super App - MVP
console.log("Campus Life Super App loaded");

// For API integration
// In the final version, this might pull live data (e.g. campus events, dining menu)

document.addEventListener("DOMContentLoaded", () => {
  const eventCards = document.querySelectorAll("#events-list .card");
  eventCards.forEach(card => {
    card.addEventListener("click", () => {
      alert("More event details coming soon!");
    });
  });
});
