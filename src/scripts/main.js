/* eslint-disable no-console */
'use strict';

const correctionСoordinate = (coordinate, maxValue) => (
  coordinate < 0
    ? 0
    : (coordinate > maxValue
      ? maxValue : coordinate)
);

document.addEventListener('click', e => {
  // write code here
  const wall = e.target.closest('.wall');

  if (wall) {
    const spider = document.querySelector('.spider');

    const heightWall = parseFloat(
      window.getComputedStyle(wall).getPropertyValue('height'),
    );
    const widthWall = parseFloat(
      window.getComputedStyle(wall).getPropertyValue('width'),
    );

    const heightWindow = window.innerHeight;
    const widtWindow = window.innerWidth;

    const xCenter
      = (e.clientY - (heightWindow - heightWall) / 2 - spider.height / 2);
    const yCenter
      = (e.clientX - (widtWindow - widthWall) / 2 - spider.width / 2);

    spider.style.top
      = `${correctionСoordinate(xCenter, heightWall - spider.height)}px`;

    spider.style.left
      = `${correctionСoordinate(yCenter, widthWall - spider.width)}px`;
  }
});
