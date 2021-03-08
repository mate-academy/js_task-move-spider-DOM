'use strict';

document.addEventListener('click', (e) => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const borderWidth = (
    wall.getBoundingClientRect().width - wall.clientWidth
  ) / 2;
  const spiderCntr = spider.width / 2;
  let spiderPositionY = e.clientY - wall.offsetTop - borderWidth - spiderCntr;
  let spiderPositionX = e.clientX - wall.offsetLeft - borderWidth - spiderCntr;

  if (e.clientX < wall.offsetLeft + borderWidth) {
    spiderPositionX = 0;
  }

  if (e.clientX + spider.width > wall.clientWidth + wall.offsetLeft) {
    spiderPositionX = wall.clientWidth - spider.width;
  }

  if (e.clientY < wall.offsetTop + borderWidth) {
    spiderPositionY = 0;
  }

  if (e.clientY + spider.height > wall.clientHeight + wall.offsetTop) {
    spiderPositionY = wall.clientHeight - spider.height;
  }

  spider.style.left = spiderPositionX + 'px';
  spider.style.top = spiderPositionY + 'px';
});
