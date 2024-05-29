'use strict';

const theWall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSizeCorrection = spider.clientWidth / 2;
const xCorrection = window.innerWidth / 2 - theWall.clientWidth / 2;
const yCorrection = window.innerHeight / 2 - theWall.clientHeight / 2;

theWall.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  spider.style.top = y - spiderSizeCorrection - yCorrection + 'px';
  spider.style.left = x - spiderSizeCorrection - xCorrection + 'px';

  if (+spider.style.top.slice(0, -2) < 0) {
    spider.style.top = 0;
  }

  if (
    +spider.style.top.slice(0, -2) >
    theWall.clientHeight - spider.clientWidth
  ) {
    spider.style.top = theWall.clientHeight - spider.clientWidth + 'px';
  }

  if (+spider.style.left.slice(0, -2) < 0) {
    spider.style.left = 0;
  }

  if (
    +spider.style.left.slice(0, -2) >
    theWall.clientWidth - spider.clientWidth
  ) {
    spider.style.left = theWall.clientWidth - spider.clientWidth + 'px';
  }
});
