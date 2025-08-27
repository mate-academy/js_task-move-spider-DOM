'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  wall.style.position = wall.style.position || 'relative';
  spider.style.position = spider.style.position || 'absolute';

  const rect = wall.getBoundingClientRect();
  let cx = e.clientX - rect.left;
  let cY = e.clientY - rect.top;
  const halfW = spider.offsetWidth / 2;
  const halfH = spider.offsetHeight / 2;

  cx = Math.max(halfW, Math.min(cx, wall.clientWidth - halfW));
  cY = Math.max(halfH, Math.min(cY, wall.clientHeight - halfH));
  spider.style.left = cx - halfW + 'px';
  spider.style.top = cY - halfH + 'px';
});
