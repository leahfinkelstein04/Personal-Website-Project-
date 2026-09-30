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

// Each page supplies aria-current="page" in its shared navigation.
const header = document.querySelector('.header');
function updateHeader() { header.classList.toggle('scrolled', window.scrollY > 20); }
window.addEventListener('scroll', updateHeader, { passive: true });
window.addEventListener('resize', () => { if (window.innerWidth > 700) closeMenu(); });
motionPreference.addEventListener('change', event => {
  if (event.matches) document.querySelectorAll('.reveal.pending').forEach(element => element.classList.remove('pending'));
});
updateHeader();

/* Progressive enhancement: every project remains visible without JavaScript. */
const filters = document.querySelector('.work-filters');
if (filters) {
  const cards = [...document.querySelectorAll('.project[data-category]')];
  const status = document.querySelector('#filter-status');
  filters.hidden = false;
  filters.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button) return;
    filters.querySelectorAll('button').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    cards.forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter;
      if (!card.hidden) card.classList.remove('pending');
    });
    status.textContent = cards.filter(card => !card.hidden).length + ' projects shown';
    updateProgress();
  });
  const revealLinkedProject = () => {
    const target = cards.find(card => '#' + card.id === location.hash);
    if (target) {
      filters.querySelector('[data-filter="all"]').click();
      target.querySelector('details').open = true;
      target.classList.remove('pending');
      target.scrollIntoView({block:'start'});
    }
  };
  revealLinkedProject();
  window.addEventListener('hashchange', revealLinkedProject);
}
