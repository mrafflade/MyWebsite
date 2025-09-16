// Dynamic greeting
const greeting = document.getElementById("greeting");
if (greeting) {
  const hour = new Date().getHours();
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
}

// Contact form handler
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    form.reset();
  });
}