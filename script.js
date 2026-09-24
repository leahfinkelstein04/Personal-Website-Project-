const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.remove('pending'); observer.unobserve(entry.target); }
  }), { threshold: 0.06 });
  document.querySelectorAll('.reveal').forEach(element => { element.classList.add('pending'); observer.observe(element); });
  document.body.classList.add('motion-ready');
}
const progress = document.querySelector('.progress');
let scheduled = false;
function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${height > 0 ? Math.max(0, Math.min(1, window.scrollY / height)) : 0})`;
  scheduled = false;
}
window.addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateProgress); } }, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

// Keep navigation orientation clear without changing the URL during scrolling.
const navLinks = [...nav.querySelectorAll('a[href^="#"]')];
const sectionLinks = navLinks.map(link => ({ link, section: document.querySelector(link.getAttribute('href')) }));
const header = document.querySelector('.header');
function updateNavigation() {
  let current = null;
  const marker = Math.min(window.innerHeight * .3, 220);
  sectionLinks.forEach(item => { if (item.section && item.section.getBoundingClientRect().top <= marker) current = item.link; });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = navLinks.at(-1);
  navLinks.forEach(link => { if (link === current) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
  header.classList.toggle('scrolled', window.scrollY > 20);
}
let navigationFrame = false;
window.addEventListener('scroll', () => {
  if (!navigationFrame) { navigationFrame = true; requestAnimationFrame(() => { updateNavigation(); navigationFrame = false; }); }
}, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 700) closeMenu(); updateNavigation(); });
navLinks.forEach(link => link.addEventListener('click', () => {
  const heading = document.querySelector(link.getAttribute('href'))?.querySelector('h2');
  if (heading) { heading.setAttribute('tabindex', '-1'); heading.focus({ preventScroll: true }); }
}));
motionPreference.addEventListener('change', event => {
  if (event.matches) document.querySelectorAll('.reveal.pending').forEach(element => element.classList.remove('pending'));
});
updateNavigation();
