'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  const halfSpider = spider.clientWidth / 2;
  let translateX = e.clientX - wall.offsetLeft - wall.clientLeft - halfSpider;
  let translateY = e.clientY - wall.offsetTop - wall.clientTop - halfSpider;

  if (translateX < halfSpider) {
    translateX = 0;
  }

  if (translateX >= wall.clientWidth - halfSpider - wall.clientLeft * 2) {
    translateX = wall.clientWidth - halfSpider * 2;
  }

  if (translateY < halfSpider) {
    translateY = 0;
  }

  if (translateY >= wall.clientHeight - halfSpider - wall.clientTop * 2) {
    translateY = wall.clientHeight - halfSpider * 2;
  }

  spider.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
