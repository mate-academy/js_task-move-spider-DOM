'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallParams = wall.getBoundingClientRect();
const spiderParams = spider.getBoundingClientRect();
const border = parseInt(getComputedStyle(wall).borderWidth);

wall.addEventListener('click', (e) => {
  // write code here

  const coordTop = e.clientY - wallParams.top - border;
  const coordLeft = e.clientX - wallParams.left - border;

  if (coordTop > wallParams.height - spiderParams.height / 2) {
    spider.style.top = `${wallParams.height - spiderParams.height - border * 2}px`;
  } else if (coordTop < spiderParams.height / 2) {
    spider.style.top = 0;
  } else {
    spider.style.top = `${coordTop - spiderParams.height / 2}px`;
  }

  if (coordLeft > wallParams.width - spiderParams.width / 2) {
    spider.style.left = `${wallParams.width - spiderParams.width - border * 2}px`;
  } else if (coordLeft < spiderParams.width / 2) {
    spider.style.left = 0;
  } else {
    spider.style.left = `${coordLeft - spiderParams.width / 2}px`;
  }
});
