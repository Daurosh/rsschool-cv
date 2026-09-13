// Обновляем год в футере автоматически
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Подсветка активного пункта навигации при скролле
const sections = document.querySelectorAll('main .section');
const navLinks = document.querySelectorAll('.site-nav a');

if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === `#${id}`
            );
          });
        }
      });
    },
    { rootMargin: '-40% 0px -50% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

// Кнопка копирования кода
const codeWrap = document.querySelector('.code-wrap');
if (codeWrap) {
  const codeEl = codeWrap.querySelector('code');
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-btn';
  button.textContent = 'Copy';

  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(codeEl.textContent);
      button.textContent = 'Copied!';
    } catch {
      button.textContent = 'Error';
    }
    setTimeout(() => {
      button.textContent = 'Copy';
    }, 1500);
  });

  codeWrap.appendChild(button);
}