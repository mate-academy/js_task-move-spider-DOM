'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wallRelative = wall.getBoundingClientRect();

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  // Calculate new position to center the spider on click
  let newX = e.clientX - wallRelative.left - (spiderWidth / 2);
  let newY = e.clientY - wallRelative.top - (spiderHeight / 2);

  // Constrain within boundaries
  newX = Math.max(0, Math.min(newX, wallRelative.width - spiderWidth));
  newY = Math.max(0, Math.min(newY, wallRelative.height - spiderHeight));

  // Move the spider
  spider.style.left = `${newX}px`;
  spider.style.top = `${newY}px`;
});
