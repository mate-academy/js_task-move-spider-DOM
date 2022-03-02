'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const scr = document.querySelector('html');
  const wall = document.querySelector('.wall');
  const itemSpider = getComputedStyle(spider);
  const itemScreen = getComputedStyle(scr);
  const itemWall = getComputedStyle(wall);

  const t = e.target.closest('.wall');

  if (!t) {
    return;
  };

  if (e.offsetY <= (parseFloat(itemSpider.height) / 2)) {
    spider.style.top = '0px';
  } else if (e.offsetY >= (parseFloat(itemWall.height)
  - (parseFloat(itemSpider.height) / 2))) {
    spider.style.top
    = `${parseFloat(itemWall.height) - parseFloat(itemSpider.height)}px`;
  } else {
    spider.style.top
    = `${e.clientY - ((parseFloat(itemScreen.height)
    - parseFloat(itemWall.height)) / 2)
    - (parseFloat(itemSpider.height) / 2)}px`;
  };

  if (e.offsetX <= (parseFloat(itemSpider.width) / 2)) {
    spider.style.left = '0px';
  } else if (e.offsetX >= (parseFloat(itemWall.width)
    - (parseFloat(itemSpider.width) / 2))) {
    spider.style.left
    = `${parseFloat(itemWall.width) - parseFloat(itemSpider.width)}px`;
  } else {
    spider.style.left
    = `${e.clientX - ((parseFloat(itemScreen.width)
    - parseFloat(itemWall.width)) / 2)
    - (parseFloat(itemSpider.width) / 2)}px`;
  };
});
