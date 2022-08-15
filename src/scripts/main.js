'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.classList.contains('wall')) {
    const maxLeftValue = wall.clientWidth - spider.offsetWidth;
    const maxTopValue = wall.clientHeight - spider.offsetHeight;

    let leftValue = e.offsetX - spider.offsetWidth / 2;
    let topValue = e.offsetY - spider.offsetHeight / 2;

    if (leftValue < 0) {
      leftValue = 0;
    }

    if (leftValue > maxLeftValue) {
      leftValue = maxLeftValue;
    }

    if (topValue < 0) {
      topValue = 0;
    }

    if (topValue > maxTopValue) {
      topValue = maxTopValue;
    }

    spider.style.left = `${leftValue}px`;
    spider.style.top = `${topValue}px`;
  }
});
