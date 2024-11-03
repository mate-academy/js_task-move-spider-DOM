'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallSize = wall.getBoundingClientRect();
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  if (
    e.clientX >= wallSize.left &&
    e.clientX <= wallSize.right &&
    e.clientY >= wallSize.top &&
    e.clientY <= wallSize.bottom
  ) {
    let newLeftCoords = e.clientX - wallSize.left - spiderWidth / 2 - 10;
    let newTopCoords = e.clientY - wallSize.top - spiderHeight / 2 - 10;

    newLeftCoords = Math.max(
      0,
      Math.min(newLeftCoords, wallSize.width - spiderWidth - 20),
    );

    newTopCoords = Math.max(
      0,
      Math.min(newTopCoords, wallSize.height - spiderHeight - 20),
    );

    spider.style.left = `${newLeftCoords}px`;
    spider.style.top = `${newTopCoords}px`;
  }
});
