type Theme = 'light' | 'dark';

const root = document.documentElement;

const current = (): Theme => (root.dataset.theme === 'dark' ? 'dark' : 'light');

function sync() {
  const dark = current() === 'dark';
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((el) => {
    el.setAttribute('aria-pressed', String(dark));
    const label = dark ? el.dataset.labelDark : el.dataset.labelLight;
    if (label) el.setAttribute('aria-label', label);
  });
}

// The choice lasts for this visit only, so the next visit starts from the local time again.
function apply(theme: Theme) {
  root.dataset.theme = theme;
  try {
    sessionStorage.setItem('theme', theme);
  } catch {}
  sync();
}

document.addEventListener('click', (e) => {
  const toggle = (e.target as Element).closest('[data-theme-toggle]');
  if (!toggle) return;
  apply(current() === 'dark' ? 'light' : 'dark');
  root.classList.add('theme-touched');
});

sync();
