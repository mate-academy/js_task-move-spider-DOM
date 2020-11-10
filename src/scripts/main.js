'use strict';

const theWall = document.querySelector('.wall');
const theSpider = document.querySelector('.spider');

theWall.addEventListener('click', (event) => {
  const leftWallEdge = theWall.offsetLeft + theWall.clientLeft;
  const topWallEdge = theWall.offsetTop + theWall.clientTop;

  const maxCoordsX = theWall.clientWidth - theSpider.offsetWidth;
  const maxCoordsY = theWall.clientHeight - theSpider.offsetHeight;

  const xPosition = event.clientX - leftWallEdge - (theSpider.offsetWidth / 2);

  const yPosition = event.clientY - topWallEdge - (theSpider.offsetHeight / 2);

  theSpider.style.left = `${checkCoordinates(xPosition, maxCoordsX)}px`;
  theSpider.style.top = `${checkCoordinates(yPosition, maxCoordsY)}px`;
});

function checkCoordinates(coords, maxCoords) {
  if (coords < 0) {
    return 0;
  }

  if (coords > maxCoords) {
    return maxCoords;
  }

  return coords;
}
