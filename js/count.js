// Event Date
var eventDate = new Date("Feb 15, 2025 00:00:00").getTime(); // Event date and time

// Update the countdown every second
var countdownInterval = setInterval(function() {
  var now = new Date().getTime();
  var timeRemaining = eventDate - now;

  // Time calculations for days, hours, minutes, and seconds
  var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = "<span>" + days + "</span>Days";
  document.getElementById("hours").innerHTML = "<span>" + hours + "</span>Hours";
  document.getElementById("minutes").innerHTML = "<span>" + minutes + "</span>Mins";
  document.getElementById("seconds").innerHTML = "<span>" + seconds + "</span>Secs";

  // If the countdown is over
  if (timeRemaining < 0) {
    clearInterval(countdownInterval); // Stop the countdown
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "<h2 class='event-live'>🎉 The Tech Vibes ! 🎉</h2>";

    // Play a sound when the event starts (optional)
    var audio = new Audio('path-to-your-sound-file.mp3'); // Replace with your sound file path
    audio.play();

    // Show the modal
    document.getElementById("event-modal").style.display = "block";
  }
}, 1000);

// Modal close button
var closeModal = document.getElementById("close-modal");
closeModal.onclick = function() {
  document.getElementById("event-modal").style.display = "none";
}

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
  var modal = document.getElementById("event-modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
