'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const maxSpyderXPosition = wall.clientWidth - spiderWidth;
  const maxSpyderYPosition = wall.clientHeight - spiderHeight;

  const clickX = e.offsetX;
  const clickY = e.offsetY;

  function moveSpiderX() {
    switch (true) {
      case clickX < spiderWidth:
        return 0;

      case clickX > maxSpyderXPosition:
        return maxSpyderXPosition;

      default:
        return clickX - spiderWidth / 2;
    }
  }

  function moveSpiderY() {
    switch (true) {
      case clickY < spiderHeight:
        return 0;

      case clickY > maxSpyderYPosition:
        return maxSpyderYPosition;

      default:
        return clickY - spiderHeight / 2;
    }
  }

  spider.style.left = moveSpiderX() + 'px';
  spider.style.top = moveSpiderY() + 'px';
});
