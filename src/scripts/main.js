'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');

  const objOfSpider = spider.getBoundingClientRect();
  const objOfWall = e.target.getBoundingClientRect();
  const constanta = 10;

  const halfOfSpider = objOfSpider.width / 2;

  if (e.target.closest('.wall')) {
    let x = e.clientX - objOfWall.x - halfOfSpider - constanta;
    let y = e.clientY - objOfWall.y - halfOfSpider - constanta;

    x = Math.max(0, Math.min(x, e.target.clientWidth - objOfSpider.width));
    y = Math.max(0, Math.min(y, e.target.clientHeight - objOfSpider.height));

    spider.style.top = y + 'px';
    spider.style.left = x + 'px';
  }
});
