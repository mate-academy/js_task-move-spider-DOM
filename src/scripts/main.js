'use strict';

document.addEventListener('click', (e) => {
  // Write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  // Calculate the bounding rectangle of the wall
  const wallCoords = wall.getBoundingClientRect();

  // Check if the click is within the wall's boundaries
  if (
    e.clientX >= wallCoords.left &&
    e.clientX <= wallCoords.right &&
    e.clientY >= wallCoords.top &&
    e.clientY <= wallCoords.bottom
  ) {
    const spiderCoords = {
      top:
        e.clientY - wallCoords.top - wall.clientTop - spider.clientHeight / 2,
      left:
        e.clientX - wallCoords.left - wall.clientLeft - spider.clientWidth / 2,
    };

    if (spiderCoords.top < 0) {
      spiderCoords.top = 0;
    }

    if (spiderCoords.left < 0) {
      spiderCoords.left = 0;
    }

    if (spiderCoords.left + spider.clientWidth > wall.clientWidth) {
      spiderCoords.left = wall.clientWidth - spider.clientWidth;
    }

    if (spiderCoords.top + spider.clientHeight > wall.clientHeight) {
      spiderCoords.top = wall.clientHeight - spider.clientHeight;
    }

    spider.style.left = spiderCoords.left + 'px';
    spider.style.top = spiderCoords.top + 'px';
  }
});
