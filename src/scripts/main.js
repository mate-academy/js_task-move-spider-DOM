'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (e.target.closest('.wall')) {
    const wallRect = wall.getBoundingClientRect();
    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const wallStyle = getComputedStyle(wall);
    const wallBorderRght = parseInt(wallStyle.borderRightWidth, 20);
    const wallBorderBottom = parseInt(wallStyle.borderBottomWidth, 20);

    let xCoords = e.clientX - wallRect.left;
    let yCoords = e.clientY - wallRect.top;

    xCoords = Math.max(
      0,
      Math.min(
        xCoords - spiderWidth / 2,
        wallRect.width - spiderWidth - wallBorderRght,
      ),
    );

    yCoords = Math.max(
      0,
      Math.min(yCoords, wallRect.height - spiderHeight - wallBorderBottom),
    );

    spider.style.left = `${xCoords}px`;
    spider.style.top = `${yCoords}px`;
  }
});
