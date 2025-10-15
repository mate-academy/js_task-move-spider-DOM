'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

if (wall || spider) {
  wall.addEventListener('click', (e) => {
    if (!e.target.closest('.wall')) {
      return;
    }

    const rect = wall.getBoundingClientRect();

    const xInWall = e.clientX - rect.left;
    const yInWall = e.clientY - rect.top;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    let leftPos = xInWall - spiderWidth / 2;
    let topPos = yInWall - spiderHeight / 2;

    const maxLeft = rect.width - spiderWidth;
    const maxTop = rect.height - spiderHeight;

    leftPos = Math.max(0, Math.min(leftPos, maxLeft));
    topPos = Math.max(0, Math.min(topPos, maxTop));

    spider.style.left = `${leftPos}px`;
    spider.style.top = `${topPos}px`;
  });
}
