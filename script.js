// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Simple console easter egg
console.log(
  '%c👾 Hello, fellow hacker. Inspecting the source? Nice.',
  'color: #58a6ff; font-size: 16px;'
);
