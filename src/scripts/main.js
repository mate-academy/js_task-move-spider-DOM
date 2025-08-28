'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  if (!spider) return; // Guard: якщо павука немає, вихід

  document.addEventListener('click', (e) => {
    const wall = e.target.closest('.wall');
    if (!wall) return;

    const wallRect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();

    const style = getComputedStyle(wall);
    const borderTop = parseFloat(style.borderTopWidth);
    const borderRight = parseFloat(style.borderRightWidth);
    const borderBottom = parseFloat(style.borderBottomWidth);
    const borderLeft = parseFloat(style.borderLeftWidth);

    // Обчислюємо позицію центру павука під курсором
    let newLeft = e.clientX - wallRect.left - spiderRect.width / 2;
    let newTop = e.clientY - wallRect.top - spiderRect.height / 2;

    // Обмежуємо рух павука всередині стіни
    const minLeft = borderLeft;
    const maxLeft = wallRect.width - borderRight - spiderRect.width;
    const minTop = borderTop;
    const maxTop = wallRect.height - borderBottom - spiderRect.height;

    newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
    newTop = Math.max(minTop, Math.min(newTop, maxTop));

    spider.style.left = newLeft + 'px';
    spider.style.top = newTop + 'px';
  });
});
