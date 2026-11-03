const fine = matchMedia('(pointer: fine)');
const calm = matchMedia('(prefers-reduced-motion: reduce)');
// Set on the spotlight element only: changing a variable on <html> would restyle the whole page.
const el = document.querySelector<HTMLElement>('.spotlight');

if (el && fine.matches && !calm.matches) {
  let frame = 0;
  let x = 0;
  let y = 0;
  addEventListener(
    'pointermove',
    (e) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        frame = 0;
      });
    },
    { passive: true },
  );
}
