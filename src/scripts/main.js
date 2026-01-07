'use strict';

document.addEventListener('click', (e) => {
  if (e.target.matches('.wall')) {
    const spider = document.querySelector('.spider');
    const wall = document.querySelector('.wall');
    const wallRect = wall.getBoundingClientRect();
    const borderOfWall = parseInt(getComputedStyle(wall).borderWidth);
    const minX = 0;
    const minY = 0;
    const maxX = wall.clientWidth - spider.clientWidth;
    const maxY = wall.clientHeight - spider.clientHeight;
    const x = Math.min(
      maxX,
      Math.max(
        minX,
        e.clientX - wallRect.left - spider.clientWidth / 2 - borderOfWall,
      ),
    );
    const y = Math.min(
      maxY,
      Math.max(
        minY,
        e.clientY - wallRect.top - spider.clientHeight / 2 - borderOfWall,
      ),
    );

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  }
});
