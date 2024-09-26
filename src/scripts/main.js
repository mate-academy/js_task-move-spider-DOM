'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const spiderWidth = parseFloat(getComputedStyle(spider).width);
  const spiderHeight = parseFloat(getComputedStyle(spider).height);
  const spiderCoords = {
    top: e.clientY - spider.parentElement.offsetTop
      - spider.parentElement.clientTop - spiderHeight / 2,
    left: e.clientX - spider.parentElement.offsetLeft
      - spider.parentElement.clientLeft - spiderWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (e.target !== document.querySelector('.wall')) {
    return;
  }

  if (spiderCoords.top + spiderHeight > spider.parentElement.clientHeight) {
    spiderCoords.top = spider.parentElement.clientHeight - spiderHeight;
  }

  if (spiderCoords.left + spiderWidth > spider.parentElement.clientWidth) {
    spiderCoords.left = spider.parentElement.clientWidth - spiderWidth;
  }

  spider.style.top = spiderCoords.top + 'px';

  spider.style.left = spiderCoords.left + 'px';
});
