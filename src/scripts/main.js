'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return 0;
  }

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  let spiderLeft = e.clientY - wall.offsetTop
    - wall.clientTop - spider.clientHeight / 2;

  let spiderTop = e.clientX - wall.offsetLeft
    - wall.clientLeft - spider.clientWidth / 2;

  // Restrict the spider position within the field boundaries
  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  // Set the spider's position
  spider.style.top = `${spiderLeft}px`;
  spider.style.left = `${spiderTop}px`;
});
