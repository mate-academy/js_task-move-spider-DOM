'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('wall')) {
    const spiderWidth = parseFloat(window.getComputedStyle(spider).width);
    const spiderHeight = parseFloat(window.getComputedStyle(spider).height);

    const clickX = e.offsetX;
    const clickY = e.offsetY;

    let spiderX = clickX - spiderWidth / 2;
    let spiderY = clickY - spiderHeight / 2;

    spiderX = Math.max(0, Math.min(spiderX, wall.clientWidth - spiderWidth));
    spiderY = Math.max(0, Math.min(spiderY, wall.clientHeight - spiderHeight));

    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
