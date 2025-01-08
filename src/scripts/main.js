'use strict';

const spider = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  e.preventDefault();

  const wallRect = wallElement.getBoundingClientRect();
  // Координаты клика относительно стены
  const relativeX = e.clientX - wallRect.left;
  const relativeY = e.clientY - wallRect.top;

  // Размеры паука
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    relativeX < 0 ||
    relativeY < 0 ||
    relativeX > wallRect.width ||
    relativeY > wallRect.height
  ) {
    return;
  }

  // Проверка, чтобы паук не выходил за пределы стены
  const adjustedX = Math.max(
    0,
    Math.min(relativeX, wallRect.width - 20 - spiderWidth),
  );
  const adjustedY = Math.max(
    0,
    Math.min(relativeY, wallRect.height - 20 - spiderHeight),
  );

  spider.style.position = 'absolute';
  spider.style.left = `${adjustedX}px`;
  spider.style.top = `${adjustedY}px`;
});
