/* eslint-disable no-shadow */
'use strict';

document.addEventListener('click', (event) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  // Получить размеры и позиции стены и паука
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // Рассчитать центр паука
  const spiderWidth = spiderRect.width;
  const spiderHeight = spiderRect.height;

  // Рассчитать новые координаты центра паука относительно клика
  let newLeft = event.clientX - spiderWidth / 2;
  let newTop = event.clientY - spiderHeight / 2;

  // Убедиться, что паук не выходит за границы стены
  const minLeft = wallRect.left;
  const maxLeft = wallRect.right - spiderWidth;
  const minTop = wallRect.top;
  const maxTop = wallRect.bottom - spiderHeight;

  newLeft = Math.max(minLeft, Math.min(newLeft, maxLeft));
  newTop = Math.max(minTop, Math.min(newTop, maxTop));

  // Применить новые координаты
  spider.style.position = 'absolute';
  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});
