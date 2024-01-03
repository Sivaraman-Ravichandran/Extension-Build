setInterval(showPopup, 5000);
function showPopup() {
  alert("Time to take a break! Positive message for the youth.");
}
document.getElementById("startQuiz").addEventListener("click", function () {
  chrome.tabs.create({
    url: "http://localhost:3000/",
  });
});