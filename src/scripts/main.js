'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallBorder = (wall.offsetWidth - wall.clientWidth) / 2;

document.addEventListener('click', e => {
  const spiderArea = e.target;

  if (!spiderArea.classList.contains('wall')) {
    return;
  }

  const spiderLocationX = e.clientX - spiderArea.offsetLeft
    - wallBorder - (spider.offsetWidth / 2);

  const spiderLocationY = e.clientY - spiderArea.offsetTop
    - wallBorder - (spider.offsetHeight / 2);

  if (spiderLocationX < 0) {
    spider.style.left = '0px';
  } else if (spiderLocationX > spiderArea.clientWidth - spider.offsetWidth) {
    spider.style.left = `${spiderArea.clientWidth - spider.offsetWidth}px`;
  } else {
    spider.style.left = `${spiderLocationX}px`;
  }

  if (spiderLocationY < 0) {
    spider.style.top = '0px';
  } else if (spiderLocationY > spiderArea.clientHeight - spider.offsetHeight) {
    spider.style.top = `${spiderArea.clientHeight - spider.offsetHeight}px`;
  } else {
    spider.style.top = `${spiderLocationY}px`;
  }
});
