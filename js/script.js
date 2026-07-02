// Toggle menu mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
 
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
 
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('show'));
});
 
// FAQ accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.faq-item').forEach(el => {
      if (el !== item) el.classList.remove('active');
    });
    item.classList.toggle('active');
  });
});
 
// Form submit
const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();
 
  if (!name || !email || !phone || !message) {
    showToast('Mohon lengkapi semua data!');
    return;
  }
 
  showToast('Pesan terkirim! Kami akan segera menghubungi Anda.');
  form.reset();
});
 
function showToast(text){
  toast.textContent = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}