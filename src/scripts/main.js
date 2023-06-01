'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const maxTop = wall.clientHeight - spider.offsetHeight;
  const maxLeft = wall.clientWidth - spider.offsetWidth;

  let spiderTop = e.clientY - wall.offsetTop
    - wall.clientTop - spider.offsetHeight / 2;

  let spiderLeft = e.clientX - wall.offsetLeft
    - wall.clientLeft - spider.offsetWidth / 2;

  // Restrict the spider position within the field boundaries
  spiderLeft = Math.max(0, Math.min(spiderLeft, maxLeft));
  spiderTop = Math.max(0, Math.min(spiderTop, maxTop));

  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;
});
