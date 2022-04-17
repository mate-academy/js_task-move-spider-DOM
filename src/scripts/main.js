'use strict';

document.addEventListener('click', e => {
  const item = e.target.closest('.wall');
  const spider = document.querySelector('.spider');
  let topPos = e.offsetY - (spider.clientHeight / 2);
  let leftPos = e.offsetX - (spider.clientWidth / 2);

  if (leftPos > item.clientWidth - (spider.clientWidth / 2)) {
    leftPos = item.clientWidth - spider.clientWidth;
  } else if (leftPos < 0) {
    leftPos = 0;
  }

  if (topPos > item.clientHeight - (spider.clientHeight / 2)) {
    topPos = item.clientHeight - spider.clientHeight;
  } else if (topPos < 0) {
    topPos = 0;
  }

  if (item) {
    spider.style.cssText = `top: ${topPos}px; left: ${leftPos}px`;
  }
});
