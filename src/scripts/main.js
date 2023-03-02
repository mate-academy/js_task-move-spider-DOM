'use strict';

document.addEventListener('click', e => {
  // write code here

  const spider = document.querySelector('.spider');

  const { offsetX, offsetY, clientX, clientY } = e;

  const widthSpider = getComputedStyle(spider);
  const halfWidthSpider = parseFloat(widthSpider.width) / 2;

  spider.style.left = clientX <= offsetX ? clientX
    : `${offsetX - halfWidthSpider}px`;

  spider.style.top = clientY <= offsetY ? clientY
    : `${offsetY - halfWidthSpider}px`;
});
