'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (e.target.matches('.wall')) {
    const fromLeft = Math.min(
      Math.max(
        e.clientX - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2,
        0,
      ),
      wall.clientWidth - spider.clientWidth,
    );

    const fromTop = Math.min(
      Math.max(
        e.clientY - wall.offsetTop - wall.clientTop - spider.clientHeight / 2,
        0,
      ),
      wall.clientHeight - spider.clientHeight,
    );

    spider.style.left = fromLeft + 'px';
    spider.style.top = fromTop + 'px';
  }
});
