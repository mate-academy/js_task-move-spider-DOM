'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;
  const wall = document.querySelector('.wall');
  const wallborderWidth = parseInt(
    window.getComputedStyle(wall).borderBlockEndWidth
  );

  let moveX = e.clientX
    - wall.offsetLeft
    - wallborderWidth
    - spiderHalfWidth;

  let moveY = e.clientY
    - wall.offsetTop
    - wallborderWidth
    - spiderHalfHeight;

  const xMax = wall.getBoundingClientRect().right
    - wallborderWidth
    - spiderHalfWidth;

  const xMin = wall.getBoundingClientRect().left
    + wallborderWidth
    + spiderHalfWidth;

  const yMax = wall.getBoundingClientRect().bottom
    - wallborderWidth
    - spiderHalfHeight;

  const yMin = wall.getBoundingClientRect().top
    + wallborderWidth
    + spiderHalfHeight;

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
