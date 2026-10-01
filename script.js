const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const formMessage = document.getElementById("formMessage");

emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.className = "form-message error";
    return;
  }

  formMessage.textContent = "Thanks! We'll be in touch soon.";
  formMessage.className = "form-message success";
  emailForm.reset();
});
