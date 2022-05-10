'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallStyle = getComputedStyle(wall);
  const spiderrStyle = getComputedStyle(spider);

  const spiderWidth = parseFloat(spiderrStyle.width);
  const spiderHeight = parseFloat(spiderrStyle.height);

  const minHorizontalPosition = parseFloat(wall.offsetLeft)
    + parseFloat(wallStyle.borderWidth);
  const minVerticalPosition = parseFloat(wall.offsetTop)
    + parseFloat(wallStyle.borderWidth);

  if (e.clientX < wall.offsetLeft || e.clientY < wall.offsetTop
    || e.clientX > wall.offsetLeft + parseFloat(wallStyle.width)
      + parseFloat(wallStyle.borderWidth) * 2
    || e.clientY > wall.offsetTop + parseFloat(wallStyle.width)
      + parseFloat(wallStyle.borderWidth) * 2) {
    return;
  }

  spider.style.left = `${parseFloat(e.clientX) - spiderWidth / 2
    - minHorizontalPosition}px`;

  spider.style.top = `${parseFloat(e.clientY) - spiderHeight / 2
    - minVerticalPosition}px`;

  if (e.clientX < minHorizontalPosition + spiderWidth / 2) {
    spider.style.left = 0;
  }

  if (e.clientX > minHorizontalPosition + parseFloat(wallStyle.width)
    - spiderWidth / 2) {
    spider.style.left = `${parseFloat(wallStyle.width)
      - spiderWidth}px`;
  }

  if (e.clientY < minVerticalPosition + spiderHeight / 2) {
    spider.style.top = 0;
  }

  if (e.clientY > minVerticalPosition + parseFloat(wallStyle.height)
    - spiderHeight / 2) {
    spider.style.top = `${parseFloat(wallStyle.height) - spiderHeight}px`;
  }
});
