// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Testimonial carousel
const testimonials = [
  {
    initials: 'CH',
    name: 'Charlotte Hale',
    title: 'Director, Delos Inc.',
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.'
  },
  {
    initials: 'JD',
    name: 'John Doe',
    title: 'Founder, Acme Co.',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
  },
  {
    initials: 'MS',
    name: 'Maria Santos',
    title: 'Lead Designer, Umbrella',
    quote: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit.'
  }
];

let currentIndex = 0;

const quoteText = document.getElementById('quoteText');
const authorName = document.getElementById('authorName');
const authorTitle = document.getElementById('authorTitle');
const avatarInitial = document.getElementById('avatarInitial');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function renderTestimonial(index) {
  const t = testimonials[index];
  quoteText.textContent = t.quote;
  authorName.textContent = t.name;
  authorTitle.textContent = t.title;
  avatarInitial.textContent = t.initials;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});