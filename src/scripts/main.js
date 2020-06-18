'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const position = wall.getBoundingClientRect();

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  let x = e.clientX - (position.x + wall.clientLeft) - spider.offsetWidth / 2;
  let y = e.clientY - (position.y + wall.clientTop) - spider.offsetWidth / 2;

  if (!e.target.closest('.wall')) {
    return;
  };

  x = x < 0 ? 0 : x;
  x = x > maxX ? maxX : x;

  y = y < 0 ? 0 : y;
  y = y > maxY ? maxY : y;

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
