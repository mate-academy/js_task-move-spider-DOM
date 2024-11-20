'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallStyle = getComputedStyle(wall);
  const borderWidth = parseInt(wallStyle.borderWidth);

  if (e.target !== wall) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderHeight = spider.clientHeight;

  const cordX = e.clientX - wallRect.left - borderWidth - spiderHeight / 2;
  const cordY = e.clientY - wallRect.top - borderWidth - spiderHeight / 2;

  const finalX = Math.min(Math.max(0, cordX), wall.clientWidth - spiderHeight);
  const finalY = Math.min(Math.max(0, cordY), wall.clientHeight - spiderHeight);

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
