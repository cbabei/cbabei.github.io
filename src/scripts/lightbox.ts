// Opens the Bambi polaroids in a <dialog>. Without JS the links simply open the large image.
const dialog = document.querySelector<HTMLDialogElement>('[data-lightbox-dialog]');
const links = [...document.querySelectorAll<HTMLAnchorElement>('[data-lightbox]')];

if (dialog && links.length && typeof dialog.showModal === 'function') {
  const img = dialog.querySelector<HTMLImageElement>('[data-lightbox-img]')!;
  const caption = dialog.querySelector<HTMLElement>('[data-lightbox-caption]')!;
  let index = 0;

  const show = (i: number) => {
    index = (i + links.length) % links.length;
    const a = links[index];
    img.src = a.dataset.full ?? a.href;
    img.alt = a.dataset.alt ?? '';
    caption.textContent = a.dataset.caption ?? '';
  };

  links.forEach((a, i) =>
    a.addEventListener('click', (e) => {
      e.preventDefault();
      show(i);
      dialog.showModal();
    }),
  );

  dialog.querySelector('[data-lightbox-close]')?.addEventListener('click', () => dialog.close());
  dialog.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => show(index - 1));
  dialog.querySelector('[data-lightbox-next]')?.addEventListener('click', () => show(index + 1));
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') show(index - 1);
    if (e.key === 'ArrowRight') show(index + 1);
  });
  // Clicking the dimmed backdrop (the dialog itself, outside the figure) closes it.
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', () => links[index]?.focus());
}
