'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName === 'DIV') {
    const clickX = e.clientX;
    const clickY = e.clientY;
    const wallCoords = wall.getBoundingClientRect();
    const spiderCoords = spider.getBoundingClientRect();
    const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

    if (
      clickX >= wallCoords.left &&
      clickX <= wallCoords.right &&
      clickY >= wallCoords.top &&
      clickY <= wallCoords.bottom
    ) {
      let newX =
        clickX - wallCoords.left - spiderCoords.width / 2 - borderWidth;
      let newY =
        clickY - wallCoords.top - spiderCoords.height / 2 - borderWidth;

      const minValue = 0;
      const maxX = wallCoords.width - spiderCoords.width - borderWidth * 2;
      const maxY = wallCoords.height - spiderCoords.height - borderWidth * 2;

      newX = Math.max(minValue, Math.min(newX, maxX));
      newY = Math.max(minValue, Math.min(newY, maxY));

      spider.style.top = newY + 'px';
      spider.style.left = newX + 'px';
    }
  }
});
