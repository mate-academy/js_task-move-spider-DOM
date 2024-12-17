'use strict';

const spiderElement = document.querySelector('.spider');
const wallBorder = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  // write code here
  const spiderWidth = spiderElement.offsetWidth;
  const spiderHeight = spiderElement.offsetHeight;

  const coordOfWall = wallBorder.getBoundingClientRect();

  let xPosition = e.clientX - coordOfWall.left - spiderWidth / 2;
  let yPosition = e.clientY - coordOfWall.top - spiderHeight / 2;

  xPosition = Math.max(0, Math.min(xPosition, coordOfWall.width - spiderWidth));

  yPosition = Math.max(
    0,
    Math.min(yPosition, coordOfWall.height - spiderHeight),
  );

  spiderElement.style.top = `${yPosition}px`;
  spiderElement.style.left = `${xPosition}px`;
});
