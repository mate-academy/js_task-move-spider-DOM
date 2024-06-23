'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (e.target.matches('.wall')) {
    const fromLeft = Math.min(
      Math.max(
        e.x - wall.offsetLeft - wall.clientLeft - spider.clientWidth / 2,
        0,
      ),
      350,
    );
    const fromTop = Math.min(
      Math.max(
        e.y - wall.offsetTop - wall.clientLeft - spider.clientHeight / 2,
        0,
      ),
      350,
    );

    spider.style.left = fromLeft + 'px';
    spider.style.top = fromTop + 'px';
  }
});
