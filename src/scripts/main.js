'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider')
  const wall = document.querySelector('.wall')


  if (e.target.closest('.wall')) {
    const rectSpider = spider.getBoundingClientRect();
    const rectWall = wall.getBoundingClientRect();
    const wallOffset = 10;

    let x = e.clientX - rectWall.left - rectSpider.width / 2 - wallOffset;
    let y = e.clientY - rectWall.top - rectSpider.height / 2 - wallOffset;

    x = Math.max(0, Math.min(x, wall.clientWidth - rectSpider.width));
    y = Math.max(0, Math.min(y, wall.clientHeight - rectSpider.height));

    spider.style.transform = `translate(${x}px, ${y}px)`
  }
});

