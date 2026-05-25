'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);

  const borderLeft = parseFloat(wallStyle.borderLeftWidth);
  const borderTop = parseFloat(wallStyle.borderTopWidth);
  const borderRight = parseFloat(wallStyle.borderRightWidth);
  const borderBottom = parseFloat(wallStyle.borderBottomWidth);

  // Внутрішні розміри стіни без border
  const wallInnerWidth = wallRect.width - borderLeft - borderRight;
  const wallInnerHeight = wallRect.height - borderTop - borderBottom;

  // Ігноруємо клік повністю поза стіною (включно з border)
  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return;
  }

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Позиція кліку відносно внутрішнього краю (без border)
  let spiderLeft = e.clientX - wallRect.left - borderLeft - spiderWidth / 2;
  let spiderTop = e.clientY - wallRect.top - borderTop - spiderHeight / 2;

  // Затискаємо в межах внутрішньої області
  spiderLeft = Math.max(0, spiderLeft);
  spiderLeft = Math.min(wallInnerWidth - spiderWidth, spiderLeft);

  spiderTop = Math.max(0, spiderTop);
  spiderTop = Math.min(wallInnerHeight - spiderHeight, spiderTop);

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
