'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const wallReck = wall.getBoundingClientRect();

  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let newTop = Math.max(
    e.clientY - wallReck.top - wall.clientTop - spiderHeight / 2,
    0,
  );

  let newLeft = Math.max(
    e.clientX - wallReck.left - wall.clientLeft - spiderWidth / 2,
    0,
  );

  newTop = Math.min(newTop, wall.clientHeight - spiderHeight);
  newLeft = Math.min(newLeft, wall.clientWidth - spiderWidth);

  spider.style.top = `${newTop}px`;
  spider.style.left = `${newLeft}px`;
});
