'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.position = 'absolute';

document.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();

  if (
    e.clientX < wallRect.left ||
    e.clientX > wallRect.right ||
    e.clientY < wallRect.top ||
    e.clientY > wallRect.bottom
  ) {
    return; // Клик вне стены — не двигаем паука
  }

  // Размеры паука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Вычисляем координаты относительно стены (центр паука на курсоре)
  let leftPosition = e.clientX - wallRect.left - spiderWidth / 2;
  let topPosition = e.clientY - wallRect.top - spiderHeight / 2;

  // Ограничиваем внутри стены
  leftPosition = Math.max(
    0,
    Math.min(leftPosition, wall.clientWidth - spiderWidth),
  );

  topPosition = Math.max(
    0,
    Math.min(topPosition, wall.clientHeight - spiderHeight),
  );

  // Устанавливаем позицию
  spider.style.left = leftPosition + 'px';
  spider.style.top = topPosition + 'px';
});
