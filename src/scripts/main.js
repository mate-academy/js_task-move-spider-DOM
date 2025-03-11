'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    moveTheSpider(e);
  }
});

function moveTheSpider(e) {
  const wallRect = wall.getBoundingClientRect();
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const x = e.clientX - wallRect.left;
  const y = e.clientY - wallRect.top;

  let leftValue = x - spiderWidth / 2;
  let topValue = y - spiderHeight / 2;

  leftValue = Math.max(0, Math.min(leftValue, wallWidth - spiderWidth));
  topValue = Math.max(0, Math.min(topValue, wallHeight - spiderHeight));

  spider.style.left = leftValue + 'px';
  spider.style.top = topValue + 'px';
}
