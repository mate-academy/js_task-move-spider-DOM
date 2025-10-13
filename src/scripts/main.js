'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) {
    return;
  }

  wall.addEventListener('click', (e) => {
    const wallRect = wall.getBoundingClientRect();

    const spiderW = spider.offsetWidth;
    const spiderH = spider.offsetHeight;

    let spiderLeft = e.clientX - wallRect.left - spiderW / 2;
    let spiderTop = e.clientY - wallRect.top - spiderH / 2;

    spiderLeft = Math.min(Math.max(spiderLeft, 0), wall.clientWidth - spiderW);
    spiderTop = Math.min(Math.max(spiderTop, 0), wall.clientHeight - spiderH);

    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
  });
});
