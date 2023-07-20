'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spdrCoords = spider.getBoundingClientRect();
  const x = e.clientX;
  const y = e.clientY;

  const topSpider = parseFloat(spider.style.top);
  const leftSpider = parseFloat(spider.style.left);
  const halfSpdHeight = spider.clientHeight / 2;
  const halfSpdWidth = spider.clientWidth / 2;

  if (spider.style.top === '') {
    let moveY = y - spdrCoords.top - halfSpdWidth;
    let moveX = x - spdrCoords.left - halfSpdWidth;

    if (moveY < 0) {
      moveY = 0;
    } else if (moveY > wall.clientHeight - spider.clientHeight) {
      moveY = wall.clientHeight - spider.clientHeight;
    }

    if (moveX < 0) {
      moveX = 0;
    } else if (moveX > wall.clientWidth - spider.clientWidth) {
      moveX = wall.clientWidth - spider.clientWidth;
    }
    spider.style.top = `${moveY}px`;
    spider.style.left = `${moveX}px`;
  } else {
    let moveY = topSpider + y - spdrCoords.top - halfSpdHeight;
    let moveX = leftSpider + x - spdrCoords.left - halfSpdWidth;

    if (moveY < 0) {
      moveY = 0;
    } else if (moveY > wall.clientHeight - spider.clientHeight) {
      moveY = wall.clientHeight - spider.clientHeight;
    }

    if (moveX < 0) {
      moveX = 0;
    } else if (moveX > wall.clientWidth - spider.clientWidth) {
      moveX = wall.clientWidth - spider.clientWidth;
    }
    spider.style.top = `${moveY}px`;
    spider.style.left = `${moveX}px`;
  }
});
