'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const container = document.querySelector('.wall');
  let y = e.clientY - container.offsetTop
    - container.clientTop - spider.height / 2;
  let x = e.clientX - container.offsetLeft - container.clientLeft
    - spider.width / 2;
  const bottomEdge = container.clientWidth - spider.clientWidth;
  const rightEdge = container.clientHeight - spider.clientHeight;

  if (!e.target.closest('.wall')) {
    return;
  }

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x > rightEdge) {
    x = rightEdge;
  }

  if (y > bottomEdge) {
    y = bottomEdge;
  }

  spider.style.top = `${y}px`;
  spider.style.left = `${x}px`;
});
