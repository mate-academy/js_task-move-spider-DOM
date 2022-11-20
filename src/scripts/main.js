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

  const minTop = spiderHight / 2;
  const maxTop = wallHight - spiderHight / 2;
  const minLeft = spiderWidth / 2;
  const maxLeft = wallWidth - spiderWidth / 2;

  y = y < minTop ? minTop : y;
  y = y > maxTop ? maxTop : y;
  x = x < minLeft ? minLeft : x;
  x = x > maxLeft ? maxLeft : x;

  spider.style.top = y + 'px';
  spider.style.left = x + 'px';
  spider.style.transform = 'translate(-50%, -50%)';
});
