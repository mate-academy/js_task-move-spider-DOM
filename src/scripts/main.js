'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const styleSpider = getComputedStyle(spider);
  const styleWall = getComputedStyle(wall);
  let resultTop = e.offsetY - styleSpider.width.replace('px', '') / 2;
  let resultLeft = e.offsetX - styleSpider.height.replace('px', '') / 2;
  const trueLeftEnd = styleWall.width.replace('px', '')
  - styleSpider.width.replace('px', '');
  const trueTopEnd = styleWall.height.replace('px', '')
  - styleSpider.height.replace('px', '');

  if (e.offsetY < styleSpider.height.replace('px', '') / 2) {
    resultTop = 0;
  } else if (resultTop > trueTopEnd) {
    resultTop = trueTopEnd;
  }

  if (e.offsetX < styleSpider.width.replace('px', '') / 2) {
    resultLeft = 0;
  } else if (resultLeft > trueLeftEnd) {
    resultLeft = trueLeftEnd;
  }

  if (e.target !== wall) {
    return;
  }

  spider.style.left = `${resultLeft}px`;
  spider.style.top = `${resultTop}px`;
});
