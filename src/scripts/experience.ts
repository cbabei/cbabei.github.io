const jobs = [...document.querySelectorAll<HTMLElement>('.job')];
const bars = [...document.querySelectorAll<HTMLElement>('.bar')];
const panels = [...document.querySelectorAll<HTMLDetailsElement>('.job-card')];

// "Expand all" / "Collapse all": opens every role, or closes them all, and its label follows what's open.
const toggle = document.querySelector<HTMLButtonElement>('[data-jobs-toggle]');
const label = toggle?.querySelector('span');
const syncToggle = () => {
  if (!toggle || !label) return;
  const allOpen = panels.every((p) => p.open);
  toggle.dataset.state = allOpen ? 'collapse' : 'expand';
  label.textContent = (allOpen ? toggle.dataset.collapse : toggle.dataset.expand) ?? '';
};
toggle?.addEventListener('click', () => {
  const open = toggle.dataset.state !== 'collapse';
  panels.forEach((p) => (p.open = open));
  syncToggle();
});
panels.forEach((p) => p.addEventListener('toggle', syncToggle));
syncToggle();

// A bar in the career map opens its role in the list.
for (const bar of bars) {
  bar.addEventListener('click', () => {
    const panel = document.querySelector<HTMLDetailsElement>(`#job-${CSS.escape(bar.dataset.job ?? '')} .job-card`);
    if (panel) panel.open = true;
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
