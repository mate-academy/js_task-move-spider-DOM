'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const yPos =
    e.clientY - wall.offsetTop - wall.clientTop - spider.offsetHeight / 2;

  const xPos =
    e.clientX - wall.offsetLeft - wall.clientLeft - spider.offsetWidth / 2;

  const [fixYPos, fixXPos] = fixCoordsToBoxSize(yPos, xPos);

  spider.style.top = `${fixYPos}px`;
  spider.style.left = `${fixXPos}px`;
});

function fixCoordsToBoxSize(yPos, xPos) {
  const newXPos = Math.max(
    0,
    Math.min(xPos, wall.clientWidth - spider.offsetWidth),
  );
  const newYPos = Math.max(
    0,
    Math.min(yPos, wall.clientHeight - spider.offsetHeight),
  );

  return [newYPos, newXPos];
}
