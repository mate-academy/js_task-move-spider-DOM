'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Отримуємо ширину рамки динамічно (без хардкоду)
  const style = getComputedStyle(wall);
  const borderWidth = parseFloat(style.borderLeftWidth);

  // Внутрішні розміри "стінки" без рамки
  const wallInnerWidth = wallRect.width - borderWidth * 2;
  const wallInnerHeight = wallRect.height - borderWidth * 2;

  // Координати кліку всередині стінки без рамки
  const clickX = e.clientX - wallRect.left - borderWidth;
  const clickY = e.clientY - wallRect.top - borderWidth;

  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderX + spiderWidth > wallInnerWidth) {
    spiderX = wallInnerWidth - spiderWidth;
  }

  if (spiderY < 0) {
    spiderY = 0;
  } else if (spiderY + spiderHeight > wallInnerHeight) {
    spiderY = wallInnerHeight - spiderHeight;
  }

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
