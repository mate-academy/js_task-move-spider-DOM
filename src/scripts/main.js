'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

wall.addEventListener('click', (e) => {
  if (!e.target.classList.contains('wall')) {
    return false;
  }

  let spiderX = e.offsetX - spiderWidth / 2;
  let spiderY = e.offsetY - spiderHeight / 2;
  const maxRigth = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  if (spiderX < 0) {
    spiderX = 0;
  } else if (spiderY < 0) {
    spiderY = 0;
  }

  if (spiderX > maxRigth) { spiderX = maxRigth; };
  if (spiderY > maxTop) { spiderY = maxTop; };

  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
