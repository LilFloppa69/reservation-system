const wrapper = document.querySelector('.testimonial-wrapper');

let isDragging = false;
let startX;
let scrollLeft;

// Event untuk Mouse
wrapper.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
  wrapper.style.cursor = 'grabbing';
  e.preventDefault(); // Mencegah seleksi teks
});

wrapper.addEventListener('mouseleave', () => {
  isDragging = false;
  wrapper.style.cursor = 'grab';
});

wrapper.addEventListener('mouseup', () => {
  isDragging = false;
  wrapper.style.cursor = 'grab';
});

wrapper.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault(); // Mencegah seleksi teks
  const x = e.pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5; // Sensitivitas geser
  wrapper.scrollLeft = scrollLeft - walk;
});

// Event untuk Touch (Mobile)
wrapper.addEventListener('touchstart', (e) => {
  isDragging = true;
  startX = e.touches[0].pageX - wrapper.offsetLeft;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener('touchend', () => {
  isDragging = false;
});

wrapper.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const x = e.touches[0].pageX - wrapper.offsetLeft;
  const walk = (x - startX) * 1.5;
  wrapper.scrollLeft = scrollLeft - walk;
});
