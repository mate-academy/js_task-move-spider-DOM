'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  let x = e.offsetX;
  let y = e.offsetY;

  if (!e.target.closest('.wall')) {
    return;
  }

  const spiderHight = spider.offsetHeight;
  const spiderWidth = spider.offsetWidth;
  const wallHight = wall.clientHeight;
  const wallWidth = wall.clientWidth;

  const calcMinTop = spiderHight / 2;
  const calcMaxTop = wallHight - spiderHight / 2;
  const calcMinLeft = spiderWidth / 2;
  const calcMaxLeft = wallWidth - spiderWidth / 2;

  y = y < calcMinTop ? calcMinTop : y;
  y = y > calcMaxTop ? calcMaxTop : y;
  x = x < calcMinLeft ? calcMinLeft : x;
  x = x > calcMaxLeft ? calcMaxLeft : x;

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
  spider.style.transform = 'translate(-50%, -50%)';
});
