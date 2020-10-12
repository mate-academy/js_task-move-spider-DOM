'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.body.addEventListener('click', event => {
  const outsideTop = (document.body.offsetHeight - wall.clientHeight) / 2;
  const outsideLeft = (document.body.offsetWidth - wall.clientWidth) / 2;
  const spiderMiddle = spider.offsetHeight / 2;

  if (event.clientY < outsideTop + spiderMiddle) {
    spider.style.top = 0;
  } else if (event.clientY > outsideTop + wall.clientHeight - spiderMiddle) {
    spider.style.top = wall.clientHeight - spider.offsetHeight + 'px';
  } else {
    spider.style.top = (event.clientY - outsideTop - spiderMiddle) + 'px';
  }

  if (event.clientX < outsideLeft + spiderMiddle) {
    spider.style.left = 0;
  } else if (event.clientX > outsideLeft + wall.clientWidth - spiderMiddle) {
    spider.style.left = wall.clientWidth - spider.offsetWidth + 'px';
  } else {
    spider.style.left = (event.clientX - outsideLeft - spiderMiddle) + 'px';
  }
});
