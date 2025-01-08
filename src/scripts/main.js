'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (!wall || !spider) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  const borderSize = (wallRect.height - wall.clientHeight) / 2;

  const clickX = e.clientX;
  const clickY = e.clientY;

  if (clickX < wallRect.left || clickX > wallRect.left + wall.offsetWidth) {
    return;
  }

  if (clickY < wallRect.top || clickY > wallRect.top + wall.offsetHeight) {
    return;
  }

  let posTop = clickY - wallRect.top - spiderHalfHeight - borderSize;
  let posLeft = clickX - wallRect.left - spiderHalfWidth - borderSize;

  posTop = Math.max(0, Math.min(posTop, wall.clientHeight - spiderRect.height));
  posLeft = Math.max(0, Math.min(posLeft, wall.clientWidth - spiderRect.width));

  spider.style.top = `${posTop}px`;
  spider.style.left = `${posLeft}px`;
});
