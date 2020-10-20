'use strict';

const theWall = document.querySelector('.wall');
const theSpider = document.querySelector('.spider');

theWall.addEventListener('click', (event) => {
  const leftWallEdge = theWall.offsetLeft + theWall.clientLeft;
  const topWallEdge = theWall.offsetTop + theWall.clientTop;

  let xPosition = event.clientX - leftWallEdge - (theSpider.offsetWidth / 2);

  let yPosition = event.clientY - topWallEdge - (theSpider.offsetHeight / 2);

  if (xPosition < 0) {
    xPosition = 0;
  }

  if (xPosition > theWall.clientWidth - theSpider.offsetWidth) {
    xPosition = theWall.clientWidth - theSpider.offsetWidth;
  }

  if (yPosition < 0) {
    yPosition = 0;
  }

  if (yPosition > theWall.clientHeight - theSpider.offsetHeight) {
    yPosition = theWall.clientHeight - theSpider.offsetHeight;
  }

  theSpider.style.left = xPosition + 'px';
  theSpider.style.top = yPosition + 'px';
});
