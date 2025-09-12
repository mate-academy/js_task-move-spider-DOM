'use strict';

const wall = document.querySelector('body .wall');
const spider = document.querySelector('body .spider');
const wallCoords = wall.getClientRects();
const spiderCoords = spider.getClientRects();
const regExpression = /(p|x)/g;

const borderParts = window.getComputedStyle(wall).border.split(' ');
const borderLength = Number(borderParts[0].replaceAll(regExpression, ''));

wallCoords[0].x += borderLength;
wallCoords[0].y += borderLength;
wallCoords[0].width -= borderLength * 2;
wallCoords[0].height -= borderLength * 2;

document.addEventListener('click', (e) => {
  if (
    e.clientX > wallCoords[0].x &&
    e.clientX < wallCoords[0].x + wallCoords[0].width &&
    e.clientY > wallCoords[0].y &&
    e.clientY < wallCoords[0].y + wallCoords[0].height
  ) {
    let leftX = 0;
    let leftY = 0;

    if (
      e.clientX + spiderCoords[0].width >
      wallCoords[0].width + wallCoords[0].x
    ) {
      leftX =
        e.clientX +
        spiderCoords[0].width / 2 -
        wallCoords[0].x -
        wallCoords[0].width;
    }

    if (
      e.clientY + spiderCoords[0].height >
      wallCoords[0].height + wallCoords[0].y
    ) {
      leftY =
        e.clientY +
        spiderCoords[0].height / 2 -
        wallCoords[0].y -
        wallCoords[0].height;
    }

    if (e.clientX - spiderCoords[0].width < wallCoords[0].x) {
      leftX = e.clientX - spiderCoords[0].width / 2 - wallCoords[0].x;
    }

    if (e.clientY - spiderCoords[0].height < wallCoords[0].y) {
      leftY = e.clientY - wallCoords[0].y - spiderCoords[0].height / 2;
    }

    spider.style.left = `${e.clientX - spiderCoords[0].x - spider.clientWidth / 2 - leftX}px`;
    spider.style.top = `${e.clientY - spiderCoords[0].y - spider.clientHeight / 2 - leftY}px`;
  }
});
