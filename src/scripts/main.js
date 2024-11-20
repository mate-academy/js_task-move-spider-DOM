'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  if (e.target !== wall) {
    return;
  }

  const wallWidth = wall.clientWidth;
  const wallHeigth = wall.clientHeight;

  const distanceLeftToWall = e.clientX - wall.offsetLeft;
  const distanceTopToWall = e.clientY - wall.offsetTop;

  const spiderHeigth = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  function positionSpiderLeft() {
    let posLeft = 0;

    if (distanceLeftToWall < wall.clientLeft + spiderWidth / 2) {
      posLeft = 0;
    } else if (
      distanceLeftToWall >
      wallWidth - (spiderWidth / 2 + wall.clientLeft)
    ) {
      posLeft = wallWidth - spiderWidth;
    } else if (
      distanceLeftToWall <
      wallWidth - spiderWidth / 2 + wall.clientLeft
    ) {
      posLeft = distanceLeftToWall - spiderWidth / 2 - wall.clientLeft;
    }

    spider.style.left = `${posLeft}px`;
  }

  function positionSpiderTop() {
    let posTop = 0;

    if (distanceTopToWall < wall.clientTop + spiderHeigth / 2) {
      posTop = 0;
    } else if (
      distanceTopToWall >
      wallHeigth - (spiderHeigth / 2 + wall.clientTop)
    ) {
      posTop = wallHeigth - spiderHeigth;
    } else if (
      distanceTopToWall <
      wallHeigth - spiderHeigth / 2 + wall.clientTop
    ) {
      posTop = distanceTopToWall - spiderHeigth / 2 - wall.clientTop;
    }

    spider.style.top = `${posTop}px`;
  }
  positionSpiderLeft();
  positionSpiderTop();
});
