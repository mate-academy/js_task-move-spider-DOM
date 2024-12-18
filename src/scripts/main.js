'use strict';

document.addEventListener('click', (e) => {
  // Getting wall and spider elements
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  // Getting spider size
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  // Getting wall size
  const wallRect = wall.getBoundingClientRect();
  const borderWidth = parseFloat(
    window.getComputedStyle(wall).getPropertyValue('border-width'),
  );
  // Getting coordinates of the click relative to the wall
  // const x = e.clientX - wallRect.left;
  // const y = e.clientY - wallRect.top;

  const x = e.pageX - wallRect.left;
  const y = e.pageY - wallRect.top;

  // Checking if the click is inside the wall boundaries considering the spider
  if (x >= 0 && y >= 0 && x <= wallRect.width && y <= wallRect.height) {
    // Calculating new coordinates for spider
    let spiderX = x - spiderWidth / 2 - borderWidth;
    let spiderY = y - spiderHeight / 2 - borderWidth;

    // get possible spider placement rect
    const availableAreaLeft = 0;
    const availableAreaRight = wallRect.width - 2 * borderWidth - spiderWidth;
    const availableAreaTop = 0;
    const availableAreaBottom =
      wallRect.height - 2 * borderWidth - spiderHeight;

    // adjusting spider coordinates to wall rect
    if (spiderX < availableAreaLeft) {
      spiderX = availableAreaLeft;
    }

    if (spiderX >= availableAreaRight) {
      spiderX = availableAreaRight;
    }

    if (spiderY < availableAreaTop) {
      spiderY = availableAreaTop;
    }

    if (spiderY > availableAreaBottom) {
      spiderY = availableAreaBottom;
    }

    // Setting the spider position using absolute positioning
    wall.style.position = 'relative';
    spider.style.position = 'absolute';
    spider.style.left = `${spiderX}px`;
    spider.style.top = `${spiderY}px`;
  }
});
