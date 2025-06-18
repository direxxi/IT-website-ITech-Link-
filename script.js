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
