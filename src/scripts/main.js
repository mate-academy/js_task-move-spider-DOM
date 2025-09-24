'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall && spider) {
  wall.addEventListener('click', (e) => {
    const rect = wall.getBoundingClientRect();
    const spiderRect = spider.getBoundingClientRect();
    const spiderWidth = spiderRect.width;
    const spiderHeight = spiderRect.height;

    let x = e.clientX - rect.left - wall.clientLeft - spiderWidth / 2;
    let y = e.clientY - rect.top - wall.clientTop - spiderHeight / 2;

    x = Math.max(0, Math.min(x, wall.clientWidth - spiderWidth));
    y = Math.max(0, Math.min(y, wall.clientHeight - spiderHeight));

    spider.style.left = x + 'px';
    spider.style.top = y + 'px';
  });
}
