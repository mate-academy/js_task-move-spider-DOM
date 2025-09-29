'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (spider && wall) {
    wall.onclick = (e) => {
      if (!wall.contains(e.target)) {
        return;
      }

      const wallRect = wall.getBoundingClientRect();
      const spiderRect = spider.getBoundingClientRect();
      const spiderW = spiderRect.width;
      const spiderH = spiderRect.height;

      const halfSpiderWidth = spiderW / 2;
      const halfSpiderHeight = spiderH / 2;

      let x = e.clientX - wallRect.left - wall.clientLeft - halfSpiderWidth;
      let y = e.clientY - wallRect.top - wall.clientTop - halfSpiderHeight;

      x = Math.max(0, Math.min(x, wall.clientWidth - spiderW));
      y = Math.max(0, Math.min(y, wall.clientHeight - spiderH));

      spider.style.left = `${x}px`;
      spider.style.top = `${y}px`;
    };
  }
});
