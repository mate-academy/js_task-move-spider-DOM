'use strict';

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const borderPaddingWidth = (wall.getBoundingClientRect().width - wall.clientWidth) / 2;
  const spiderCenterX = spider.width / 2;
  const spiderCenterY = spider.width / 2;
  let spiderPositionY = e.clientY - wall.offsetTop - borderPaddingWidth - spiderCenterY;
  let spiderPositionX = e.clientX - wall.offsetLeft - borderPaddingWidth - spiderCenterX;

  if (e.clientX < wall.offsetLeft + borderPaddingWidth) {
    spiderPositionX = 0;
  }

  if (e.clientX + spider.width > wall.clientWidth + wall.offsetLeft) {
    spiderPositionX = wall.clientWidth - spider.width;
  }

  if (e.clientY < wall.offsetTop + borderPaddingWidth) {
    spiderPositionY = 0;
  }

  if (e.clientY + spider.height > wall.clientHeight + wall.offsetTop) {
    spiderPositionY = wall.clientHeight - spider.height;
  }

  spider.style.left = spiderPositionX + 'px';
  spider.style.top = spiderPositionY + 'px';
});
