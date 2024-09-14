'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallCoords = wall.getBoundingClientRect();

  let newTop = Math.max(
    e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
    0,
  );

  let newLeft = Math.max(
    e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
    0,
  );

  newTop = Math.min(newTop, wall.clientHeight - spider.clientHeight);
  newLeft = Math.min(newLeft, wall.clientWidth - spider.clientWidth);

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
