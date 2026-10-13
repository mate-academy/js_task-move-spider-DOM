'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const field = document.querySelector('.wall');
  const spiderMid = spider.offsetWidth / 2;

  if (e.target === field) {
    let xPos = e.clientX - field.offsetLeft - spiderMid - field.clientLeft;
    let yPos = e.clientY - field.offsetTop - spiderMid - field.clientTop;

    if (xPos < 0) {
      xPos = 0;
    }

    if (yPos < 0) {
      yPos = 0;
    }

    if (xPos > field.clientWidth - spider.offsetWidth) {
      xPos = field.clientWidth - spider.offsetWidth;
    }

    if (yPos > field.clientHeight - spider.offsetHeight) {
      yPos = field.clientHeight - spider.offsetHeight;
    }

    spider.style.left = xPos + 'px';
    spider.style.top = yPos + 'px';
  }
});
