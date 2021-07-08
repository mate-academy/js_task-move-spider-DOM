'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const wallStyle = window.getComputedStyle(wall);
const spiderStyle = window.getComputedStyle(spider);
const maxTopPosition
  = parseFloat(wallStyle.height) - parseFloat(spiderStyle.height);
const maxLeftPosition
  = parseFloat(wallStyle.width) - parseFloat(spiderStyle.width);
const halfOfSpider
  = parseFloat(wallStyle.borderWidth) + parseFloat(spiderStyle.width) / 2;

document.addEventListener('click', e => {
  const clickIntoWall = e.target.closest('.wall');

  if (clickIntoWall) {
    let calcTop;
    let calcLeft;
    const calcX = e.clientX - wall.offsetLeft;
    const calcY = e.clientY - wall.offsetTop;

    if (calcY > maxTopPosition) {
      calcTop = 350;
    } else if (calcY > halfOfSpider) {
      calcTop = calcY - halfOfSpider;
    } else {
      calcTop = 0;
    }

    if (calcX > maxLeftPosition) {
      calcLeft = 350;
    } else if (calcX > halfOfSpider) {
      calcLeft = calcX - halfOfSpider;
    } else {
      calcLeft = 0;
    }

    spider.style.top = `${calcTop}px`;
    spider.style.left = `${calcLeft}px`;
  }
});
