'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spiderHalfSize = spider.offsetWidth / 2;
  const wallborderWidth = parseInt(window.getComputedStyle(wall).borderWidth);

  let moveX = e.clientX
    - wall.offsetLeft
    - wallborderWidth
    - spiderHalfSize;

  let moveY = e.clientY
    - wall.offsetTop
    - wallborderWidth
    - spiderHalfSize;

  const xMax = wall.getBoundingClientRect().right
    - wallborderWidth
    - spiderHalfSize;

  const xMin = wall.getBoundingClientRect().left
    + wallborderWidth
    + spiderHalfSize;

  const yMax = wall.getBoundingClientRect().bottom
    - wallborderWidth
    - spiderHalfSize;

  const yMin = wall.getBoundingClientRect().top
    + wallborderWidth
    + spiderHalfSize;

  if (e.target.classList.contains('wall')) {
    if (e.clientX >= xMax) {
      moveX = wall.clientWidth - spider.offsetWidth;
    }

    if (e.clientX <= xMin) {
      moveX = 0;
    }

    if (e.clientY >= yMax) {
      moveY = wall.clientHeight - spider.offsetHeight;
    }

    if (e.clientY <= yMin) {
      moveY = 0;
    }

    spider.setAttribute('style', `top: ${moveY}px; left: ${moveX}px;`);
  }
});
