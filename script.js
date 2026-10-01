/* =========================================================
   Treact Website JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================================
     1. MOBILE MENU
     ========================================================= */

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");

      // Change the hamburger icon
      if (navLinks.classList.contains("open")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }
    });

    // Close menu when a navigation link is clicked
    const navItems = navLinks.querySelectorAll("a");

    navItems.forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
      });
    });
  }


  /* =========================================================
     2. EMAIL FORM
     ========================================================= */

  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("emailInput");
  const formMessage = document.getElementById("formMessage");

  if (emailForm && emailInput && formMessage) {

    emailForm.addEventListener("submit", function (event) {

      // Prevent the page from refreshing
      event.preventDefault();

      const email = emailInput.value.trim();

      // Basic email validation
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Clear previous message
      formMessage.textContent = "";
      formMessage.className = "form-message";

      // Check if empty
      if (email === "") {
        formMessage.textContent = "Please enter your email address.";
        formMessage.classList.add("error");
        return;
      }

      // Check if valid email
      if (!emailPattern.test(email)) {
        formMessage.textContent =
          "Please enter a valid email address.";
        formMessage.classList.add("error");
        return;
      }

      // Successful submission
      formMessage.textContent =
        "Thank you! Your email has been submitted.";
      formMessage.classList.add("success");

      // Clear input
      emailInput.value = "";
    });
  }


  /* =========================================================
     3. TESTIMONIAL SLIDER
     ========================================================= */

  const testimonials = [
    {
      title: "Amazing User Experience",
      text:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      name: "Charlotte Hale",
      role: "Director, Delos Inc.",
      image: "Assets/photo-1494790108377-be9c29b29330.avif"
    },

    {
      title: "Beautiful Design",
      text:
        "The templates are clean, modern and extremely easy to customize. Everything feels professional and works together beautifully.",
      name: "John Smith",
      role: "CEO, Tech Company",
      image: "Assets/photo-1500648767791-00dcc994a43e.avif"
    },

    {
      title: "Easy To Customize",
      text:
        "I was able to customize the template quickly and create exactly what I needed. The design made the entire process simple.",
      name: "Sarah Johnson",
      role: "Product Manager",
      image: "Assets/photo-1534528741775-53994a69daeb.avif"
    }
  ];

  let currentTestimonial = 0;

  const previousButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const testimonialContainer =
    document.getElementById("t-slide");

  const testimonialTitle =
    document.getElementById("q-title");

  const testimonialText =
    document.getElementById("q-text");

  const testimonialName =
    document.getElementById("q-name");

  const testimonialRole =
    document.getElementById("q-role");

  const testimonialAvatar =
    document.getElementById("q-av");


  function showTestimonial(index) {

    // Add fade-out effect
    if (testimonialContainer) {
      testimonialContainer.classList.add("out");
    }

    setTimeout(function () {

      const testimonial = testimonials[index];

      if (testimonialTitle) {
        testimonialTitle.textContent = testimonial.title;
      }

      if (testimonialText) {
        testimonialText.textContent = testimonial.text;
      }

      if (testimonialName) {
        testimonialName.textContent = testimonial.name;
      }

      if (testimonialRole) {
        testimonialRole.textContent = testimonial.role;
      }

      if (testimonialAvatar) {
        testimonialAvatar.src = testimonial.image;
        testimonialAvatar.alt = testimonial.name;
      }

      // Fade back in
      if (testimonialContainer) {
        testimonialContainer.classList.remove("out");
      }

    }, 250);
  }


  // Previous testimonial
  if (previousButton) {
    previousButton.addEventListener("click", function () {

      currentTestimonial--;

      if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
      }

      showTestimonial(currentTestimonial);
    });
  }


  // Next testimonial
  if (nextButton) {
    nextButton.addEventListener("click", function () {

      currentTestimonial++;

      if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
      }

      showTestimonial(currentTestimonial);
    });
  }


  /* =========================================================
     4. SMOOTH SCROLLING
     ========================================================= */

  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetID = this.getAttribute("href");

      // Ignore links that are just "#"
      if (targetID === "#") {
        return;
      }

      const target = document.querySelector(targetID);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });


  /* =========================================================
     5. CLOSE MOBILE MENU WHEN WINDOW GETS BIGGER
     ========================================================= */

  window.addEventListener("resize", function () {

    if (window.innerWidth > 850) {

      if (navLinks) {
        navLinks.classList.remove("open");
      }

      if (menuToggle) {
        menuToggle.textContent = "☰";
      }
    }
  });

});