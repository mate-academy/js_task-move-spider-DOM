'use strict';

const getCoordinates = function(event, item, movingObj) {
  const webSquare = item.getBoundingClientRect();
  const spider = movingObj.getBoundingClientRect();
  const border = item.clientTop;
  const webSquareTop = webSquare.top + window.pageYOffset
  + border + (spider.height / 2);
  const webSquareLeft = webSquare.left + window.pageXOffset
  + border + (spider.width / 2);

  let mouseX = (event.clientX + window.pageXOffset) - webSquareLeft;
  let mouseY = (event.clientY + window.pageYOffset) - webSquareTop;
  const wallWidth = webSquare.width - 2 * border;
  const wallHeight = webSquare.height - 2 * border;

  mouseX = (mouseX < 0) ? 0 : mouseX;

  mouseX = (mouseX > (wallWidth - spider.width))
    ? wallWidth - spider.width : mouseX;

  mouseY = (mouseY < 0) ? 0 : mouseY;

  mouseY = (mouseY > (wallHeight - spider.height))
    ? wallHeight - spider.height : mouseY;

  return {
    left: mouseX,
    top: mouseY,
  };
};

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const element = e.target.closest('.wall');

  if (!element || !wall.contains(element)) {
    return;
  }

  const coordinates = getCoordinates(e, wall, spider);

  spider.style.left = (coordinates.left) + 'px';
  spider.style.top = (coordinates.top) + 'px';
});
