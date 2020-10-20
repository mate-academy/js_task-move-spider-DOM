'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', moveSpider);

function moveSpider(event) {
  const leftEdge = wall.offsetLeft;
  const topEdge = wall.offsetTop;

  const spiderMaxCoordX = wall.clientWidth - spider.clientWidth;
  const spiderMinCoordX = 0;
  const spiderMaxCoordY = wall.clientHeight - spider.clientHeight;
  const spiderMinCoordY = 0;

  let coordX = event.clientX - leftEdge - spider.clientWidth / 2;
  let coordY = event.clientY - topEdge - spider.clientHeight / 2;

  if (coordX < spiderMinCoordX) {
    coordX = spiderMinCoordX;
  }

  if (coordX > spiderMaxCoordX) {
    coordX = spiderMaxCoordX;
  }

  if (coordY < spiderMinCoordY) {
    coordY = spiderMinCoordY;
  }

  if (coordY > spiderMaxCoordY) {
    coordY = spiderMaxCoordY;
  }

  spider.style.left = `${coordX}px`;
  spider.style.top = `${coordY}px`;
}
