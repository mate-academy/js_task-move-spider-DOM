'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  const clickCoordX = Math.ceil(
    e.clientX - wall.getBoundingClientRect().left - wall.clientLeft
  );
  const clickCoordY = Math.ceil(
    e.clientY - wall.getBoundingClientRect().top - wall.clientTop
  );

  let movePositionX = clickCoordX - spiderWidth / 2;
  let movePositionY = clickCoordY - spiderHeight / 2;

  if (e.target.className !== 'wall') {
    return;
  }

  if (clickCoordX <= spiderWidth / 2) {
    movePositionX = 0;
  }

  if (clickCoordY <= spiderHeight / 2) {
    movePositionY = 0;
  }

  if (clickCoordX >= wallWidth - spiderWidth / 2) {
    movePositionX = wallWidth - spiderWidth;
  }

  if (clickCoordY >= wallHeight - spiderHeight / 2) {
    movePositionY = wallHeight - spiderHeight;
  }

  spider.style.left = movePositionX + 'px';
  spider.style.top = movePositionY + 'px';
});
