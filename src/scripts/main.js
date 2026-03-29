'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  // висота та ширина паука
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  // координати стіни відносно Viewport
  const wallRect = wall.getBoundingClientRect();

  // координати кліка клієнта. Тчк кліку - відступ від стіни - товщина рамки
  const relativeX = e.clientX - wallRect.left - wall.clientLeft;
  const relativeY = e.clientY - wallRect.top - wall.clientTop;

  // координати - 1/2 павука (щоб став по центру мишки)
  let targetX = relativeX - spiderWidth / 2;
  let targetY = relativeY - spiderHeight / 2;

  // обмеження
  const maxX = wall.clientWidth - spiderWidth;
  const maxY = wall.clientHeight - spiderHeight;

  targetX = Math.max(0, Math.min(targetX, maxX));
  targetY = Math.max(0, Math.min(targetY, maxY));

  // павук може вільно рухатися
  spider.style.position = 'absolute';

  // фінальна команда для павука
  spider.style.left = targetX + 'px';
  spider.style.top = targetY + 'px';
});
