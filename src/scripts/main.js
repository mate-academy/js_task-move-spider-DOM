'use strict';

document.addEventListener('click', e => {
  if (e.target.tagName === 'BODY') {
    return;
  }

  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  const borderSizeWall
    = parseInt(window.getComputedStyle(wallElement).borderWidth);
  const halfSizeSpider
    = parseInt(window.getComputedStyle(spiderElement).width) / 2;
  const wallSize = parseInt(window.getComputedStyle(wallElement).width);

  const bordLeftWall
    = wallElement.getBoundingClientRect().x
    + borderSizeWall
    + halfSizeSpider;

  const bordRightWall
    = wallElement.getBoundingClientRect().x
    + borderSizeWall
    + wallSize
    - halfSizeSpider;

  const bordTopWall
    = wallElement.getBoundingClientRect().y
    + borderSizeWall
    + halfSizeSpider;

  const bordButtonWall
    = wallElement.getBoundingClientRect().y
    + borderSizeWall
    + wallSize
    - halfSizeSpider;

  const cursorX = e.clientX;
  const cursorY = e.clientY;

  spiderElement.style.left = cursorX - bordLeftWall + 'px';
  spiderElement.style.top = cursorY - bordTopWall + 'px';

  if (cursorX < bordLeftWall) {
    spiderElement.style.left = 0;
  }

  if (cursorY < bordTopWall) {
    spiderElement.style.top = 0;
  }

  if (cursorX > bordRightWall) {
    spiderElement.style.left = bordRightWall - bordLeftWall + 'px';
  }

  if (cursorY > bordButtonWall) {
    spiderElement.style.top = bordButtonWall - bordTopWall + 'px';
  }
});
