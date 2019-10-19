'use strict';

document.addEventListener('click', e => {
  const element = e.target;
  const field = document.querySelector('.wall');
  if (!field.contains(element)) return;
  const spider = field.querySelector('.spider');
  const fieldPosition = field.getBoundingClientRect();
  let posX = e.clientX - (fieldPosition.x + field.clientLeft);
  let posY = e.clientY - (fieldPosition.y + field.clientTop);

  posX = posX - (spider.clientWidth / 2) < 0 ? 0 : posX - (spider.clientWidth / 2);
  posX = posX + (spider.clientWidth) > field.clientWidth ? field.clientWidth - spider.clientWidth : posX;

  posY = posY - (spider.clientHeight / 2) < 0 ? 0 : posY - (spider.clientHeight / 2);
  posY = posY + (spider.clientHeight) > field.clientHeight ? field.clientHeight - spider.clientHeight : posY;

  spider.style.cssText = `left: ${posX}px; top: ${posY}px`;
  console.log(posY);
});
