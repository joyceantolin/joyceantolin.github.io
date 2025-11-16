// Highlight active nav link based on current page
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Smooth scroll for anchor links (optional if you add # links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Contact form submission message
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Message sent successfully!");
    form.reset();
  });
}

// Fade-in animation when page loads
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});

const images = document.querySelectorAll('.gallery-container img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');
const prevBtn = lightbox.querySelector('.prev');
const nextBtn = lightbox.querySelector('.next');

let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImage.src = images[currentIndex].src;
  });
});

closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentIndex].src;
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImage.src = images[currentIndex].src;
});

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (e) => {
  if(e.target === lightbox) lightbox.style.display = 'none';
});
const scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show/hide button with fade effect
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  // Scroll to top when clicked
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });