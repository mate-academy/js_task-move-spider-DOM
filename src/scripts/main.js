'use strict';

const theWall = document.querySelector('.wall');
const theSpider = document.querySelector('.spider');

theWall.addEventListener('click', (event) => {
  const leftWallEdge = theWall.offsetLeft + theWall.clientLeft;
  const topWallEdge = theWall.offsetTop + theWall.clientTop;

  const xPosition = event.clientX - leftWallEdge - (theSpider.offsetWidth / 2);

  const yPosition = event.clientY - topWallEdge - (theSpider.offsetHeight / 2);

  theSpider.style.left = xPosition + 'px';
  theSpider.style.top = yPosition + 'px';
});
