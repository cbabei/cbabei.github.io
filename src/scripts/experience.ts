const calm = matchMedia('(prefers-reduced-motion: reduce)');
const jobs = [...document.querySelectorAll<HTMLElement>('.job')];
const bars = [...document.querySelectorAll<HTMLElement>('.bar')];
const buttons = [...document.querySelectorAll<HTMLButtonElement>('button[data-group]')];
const status = document.querySelector<HTMLElement>('.showing');

type Group = 'type' | 'focus';
const state: Record<Group, string> = { type: '', focus: '' };

const matches = (el: HTMLElement) =>
  (!state.type || el.dataset.type === state.type) &&
  (!state.focus || (el.dataset.focus ?? '').split('|').includes(state.focus));

function render() {
  let shown = 0;
  for (const job of jobs) {
    const ok = matches(job);
    job.hidden = !ok;
    if (ok) shown++;
  }
  for (const bar of bars) bar.classList.toggle('is-dim', !matches(bar));
  for (const b of buttons) {
    b.setAttribute('aria-pressed', String(state[b.dataset.group as Group] === (b.dataset.value ?? '')));
  }
  if (status) {
    const filtered = state.type || state.focus;
    status.textContent = filtered
      ? (status.dataset.template ?? '').replace('{n}', String(shown)).replace('{total}', status.dataset.total ?? '')
      : '';
  }
}

for (const b of buttons) {
  b.addEventListener('click', () => {
    const group = b.dataset.group as Group;
    const value = b.dataset.value ?? '';
    state[group] = state[group] === value ? '' : value;
    if (document.startViewTransition && !calm.matches) document.startViewTransition(render);
    else render();
  });
}

// Hovering a bar highlights its card and vice versa.
const link = (id: string | undefined, on: boolean) => {
  if (!id) return;
  document.querySelectorAll(`[data-job="${CSS.escape(id)}"]`).forEach((el) => el.classList.toggle('is-linked', on));
};
for (const el of [...jobs, ...bars]) {
  el.addEventListener('pointerenter', () => link(el.dataset.job, true));
  el.addEventListener('pointerleave', () => link(el.dataset.job, false));
}

// Career map: start on the most recent years, and let mouse users drag it sideways.
const scroller = document.querySelector<HTMLElement>('[data-map-scroll]');
if (scroller) {
  // A ResizeObserver runs right after layout, so measuring the map here costs no extra layout.
  new ResizeObserver((_, observer) => {
    scroller.scrollLeft = scroller.scrollWidth;
    observer.disconnect();
  }).observe(scroller);
  let startX = 0;
  let startLeft = 0;
  let pressed = false;
  let moved = false;
  scroller.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    startX = e.clientX;
    startLeft = scroller.scrollLeft;
    pressed = true;
    moved = false;
  });
  scroller.addEventListener('pointermove', (e) => {
    if (!pressed) return;
    const dx = e.clientX - startX;
    // Capture only once it is clearly a drag, so a plain click still follows the bar link.
    if (!moved && Math.abs(dx) > 4) {
      moved = true;
      scroller.setPointerCapture(e.pointerId);
      scroller.classList.add('is-dragging');
    }
    if (moved) scroller.scrollLeft = startLeft - dx;
  });
  const end = (e: PointerEvent) => {
    pressed = false;
    if (scroller.hasPointerCapture(e.pointerId)) scroller.releasePointerCapture(e.pointerId);
    scroller.classList.remove('is-dragging');
  };
  scroller.addEventListener('pointerup', end);
  scroller.addEventListener('pointercancel', end);
  // A drag should not also follow the bar link underneath.
  scroller.addEventListener('click', (e) => {
    if (moved) {
      e.preventDefault();
      moved = false;
    }
  }, true);
}
