'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const wallInfo = wall.getBoundingClientRect();
    const spiderSize = spider.getBoundingClientRect();
    const border = wall.clientTop;
    const halfSpiderWidth = spiderSize.width / 2;
    const halfSpiderHeight = spiderSize.height / 2;

    let x = e.clientX - wallInfo.left - halfSpiderWidth - border;
    let y = e.clientY - wallInfo.top - halfSpiderHeight - border;

    x = Math.max(0, Math.min(x, wall.clientWidth - spiderSize.width));

    y = Math.max(0, Math.min(y, wall.clientHeight - spiderSize.height));

    spider.style.left = `${x}px`;
    spider.style.top = `${y}px`;
  }
});
