'use strict';

document.addEventListener('click', e => {
  const target = e.target;

  if (!target.classList.contains('wall')) {
    return;
  }

  const spiderImg = document.querySelector('img.spider');
  const styleWall = getComputedStyle(target);
  const styleSpider = getComputedStyle(spiderImg);

  const widthWall = parseFloat(styleWall.width);
  const heightWall = parseFloat(styleWall.height);
  const borderWall = parseFloat(styleWall.borderWidth);
  const halfWidthSpider = parseFloat(styleSpider.width) / 2;
  const halfHeightSpider = parseFloat(styleSpider.height) / 2;

  const wallX = target.getBoundingClientRect().left + window.pageXOffset;
  const wallY = target.getBoundingClientRect().top + window.pageYOffset;

  const startXInsideWall = wallX + borderWall + halfWidthSpider;
  const startYInsideWall = wallY + borderWall + halfHeightSpider;
  const endXInsideWall = wallX + borderWall + widthWall - halfWidthSpider;
  const endYInsideWall = wallY + borderWall + heightWall - halfHeightSpider;

  let axisX = e.clientX;
  let axisY = e.clientY;

  if (axisX < startXInsideWall) {
    axisX = startXInsideWall;
  }

  if (axisX > endXInsideWall) {
    axisX = endXInsideWall;
  }

  if (axisY < startYInsideWall) {
    axisY = startYInsideWall;
  }

  if (axisY > endYInsideWall) {
    axisY = endYInsideWall;
  }

  axisX -= wallX + borderWall;
  axisY -= wallY + borderWall;

  spiderImg.style.top = `${axisY - halfWidthSpider}px`;
  spiderImg.style.left = `${axisX - halfHeightSpider}px`;
});
