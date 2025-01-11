'use strict';

// Select the spider and wall elements
const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

// Add a click event listener on the document
// eslint-disable-next-line no-shadow
document.addEventListener('click', (event) => {
  // Get the wall's bounding rectangle
  const wallRect = wall.getBoundingClientRect();

  // Check if the click is inside the wall
  const isInsideWall =
    event.clientX >= wallRect.left &&
    event.clientX <= wallRect.right &&
    event.clientY >= wallRect.top &&
    event.clientY <= wallRect.bottom;

  // Do nothing if the click is outside the wall
  if (!isInsideWall) {
    return;
  }

  // Get the wall's border size (assumes uniform border)
  const wallStyle = getComputedStyle(wall);
  const borderWidth = parseInt(wallStyle.borderWidth, 10);

  // Get the spider's dimensions
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Calculate the click position relative to the wall's content area
  const clickX = event.clientX - wallRect.left - borderWidth;
  const clickY = event.clientY - wallRect.top - borderWidth;

  // Calculate the spider's new position to center it under the pointer
  let spiderX = clickX - spiderWidth / 2;
  let spiderY = clickY - spiderHeight / 2;

  // Constrain the spider within the wall's content area
  spiderX = Math.max(
    0,
    Math.min(spiderX, wallRect.width - 2 * borderWidth - spiderWidth),
  );

  spiderY = Math.max(
    0,
    Math.min(spiderY, wallRect.height - 2 * borderWidth - spiderHeight),
  );

  // Update the spider's position
  spider.style.left = `${spiderX}px`;
  spider.style.top = `${spiderY}px`;
});
