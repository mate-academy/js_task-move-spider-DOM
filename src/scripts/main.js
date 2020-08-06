'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  // write code here
  const move = checkEdgesWall(e);

  if (spider.style.left === '') {
    spider.style.left = `${0}px`;
    spider.style.top = `${0}px`;
  }

  spider.style.left = `${parseFloat(spider.style.left) + move.xPosition}px`;
  spider.style.top = `${parseFloat(spider.style.top) + move.yPosition}px`;
});

function checkEdgesWall(event) {
  let positionX = 0;
  let positionY = 0;

  if (event.clientX <= wall.offsetLeft + spider.offsetWidth) {
    positionX = wall.offsetLeft + wall.clientLeft - spider.x;
  } else {
    if (event.clientX >= wall.offsetLeft - spider.offsetWidth
      + wall.offsetWidth) {
      positionX = wall.offsetLeft + wall.offsetWidth
        - wall.clientLeft - spider.offsetWidth - spider.x;
    } else {
      positionX = event.clientX - spider.x - (spider.offsetWidth / 2);
    }
  }

  if (event.clientY <= wall.offsetTop + spider.offsetHeight) {
    positionY = wall.offsetTop + wall.clientTop - spider.y;
  } else {
    if (event.clientY >= wall.offsetTop - spider.offsetHeight
      + wall.offsetHeight) {
      positionY = wall.offsetTop + wall.offsetHeight
      - wall.clientTop - spider.offsetHeight - spider.y;
    } else {
      positionY = event.clientY - spider.y - (spider.offsetHeight / 2);
    }
  }

  return {
    xPosition: positionX,
    yPosition: positionY,
  };
}
