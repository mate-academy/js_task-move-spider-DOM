'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const style = {
    left: 0,
    top: 0,
  };

  const wallStyles = getComputedStyle(wall);
  const borderLeftWidth = parseInt(wallStyles.borderLeftWidth, 10); // 10px
  const borderTopWidth = parseInt(wallStyles.borderTopWidth, 10); // 10px

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  let coordX = e.clientX - wall.offsetLeft - borderLeftWidth - spiderWidth / 2;

  coordX = Math.max(0, Math.min(wall.clientWidth - spiderWidth, coordX));

  let coordY = e.clientY - wall.offsetTop - borderTopWidth - spiderWidth / 2;

  coordY = Math.max(0, Math.min(wall.clientHeight - spiderHeight, coordY));

  style.left = `${coordX}px`;
  style.top = `${coordY}px`;

  Object.assign(spider.style, style);
});
