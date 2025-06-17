'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const targetXInWall = e.clientX - wallRect.left;
  const targetYInWall = e.clientY - wallRect.top;

  const currentX = spiderRect.left - wallRect.left + spiderRect.width / 2;
  const currentY = spiderRect.top - wallRect.top + spiderRect.height / 2;

  const translateX = targetXInWall - currentX;
  const translateY = targetYInWall - currentY;

  const currentTransform = window.getComputedStyle(spider).transform;
  const currentMatrix = new DOMMatrix(currentTransform);

  const newTranslateX = currentMatrix.e + translateX;
  const newTranslateY = currentMatrix.f + translateY;

  spider.style.transform = `translate(${newTranslateX}px, ${newTranslateY}px)`;
});
