'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  // 1) браво: беремо rect стіни і павука
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

    // 2) click координати відносно стіни (use clientX/clientY)
  const clickX = e.clientX - wallRect.left;
  const clickY = e.clientY - wallRect.top;

  // 3) розміри павука
  const spiderW = spiderRect.width;
  const spiderH = spiderRect.height;

  // 4) позиція лівого-верхнього кута так, щоб центр павука був у click
  let newLeft = clickX - spiderW / 2;
  let newTop  = clickY - spiderH / 2;

  // 5) межі (щоб павук не виліз за рамки)
  const maxLeft = wall.clientWidth - spiderW;
  const maxTop = wall.clientHeight - spiderH;
  // 6) обмежуємо
  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop  = Math.max(0, Math.min(newTop,  maxTop));

  // 7) застосовуємо
  spider.style.left = `${newLeft}px`;
  spider.style.top  = `${newTop}px`;
});
