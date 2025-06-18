const btn       = document.querySelector('.menu-toggle');
const drawer    = document.querySelector('.drawer-nav');
const closeBtn  = document.querySelector('.drawer-close');

btn.addEventListener('click', () => {
  const isOpen = drawer.classList.toggle('open');
  drawer.setAttribute('aria-hidden', !isOpen);
});

// close when X clicked
closeBtn.addEventListener('click', () => {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
});
// ───────── Testimonial Carousel ─────────
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 4000); // Slide every 4 seconds
