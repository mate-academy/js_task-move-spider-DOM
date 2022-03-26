'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;
  let topSpider = e.offsetY - spider.clientHeight / 2;
  let leftSpider = e.offsetX - spider.clientWidth / 2;

  topSpider = topSpider > 0 ? topSpider : 0;
  topSpider = topSpider < maxTop ? topSpider : maxTop;
  leftSpider = leftSpider > 0 ? leftSpider : 0;
  leftSpider = leftSpider < maxLeft ? leftSpider : maxLeft;

  spider.style.top = topSpider + 'px';
  spider.style.left = leftSpider + 'px';
});
