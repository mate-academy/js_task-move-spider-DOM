'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

// --- Перевірка на наявність елементів ---
if (wall && spider) {
   // --- Обробник кліків лише всередині стіни ---
  document.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    // Якщо клік поза межами стіни — нічого не робимо
    if (
      e.clientX < wallRect.left ||
      e.clientX > wallRect.right ||
      e.clientY < wallRect.top ||
      e.clientY > wallRect.bottom
    ) {
      return;
    }

    const spiderRect = spider.getBoundingClientRect();

    // Координати кліку відносно стіни
    const clickX = e.clientX - wallRect.left;
    const clickY = e.clientY - wallRect.top;

    const spiderW = spiderRect.width;
    const spiderH = spiderRect.height;

    // Початкові координати так, щоб центр павука опинився під курсором
    let newLeft = clickX - spiderW / 2;
    let newTop = clickY - spiderH / 2;

    // --- Обмеження меж у тій самій системі координат (Rect) ---
    const maxLeft = Math.max(0, wallRect.width - spiderW);
    const maxTop = Math.max(0, wallRect.height - spiderH);

    // --- Затискання координат ---
    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));

    // --- Застосування ---
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
}
