'use strict';

document.addEventListener('click', event => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallParameters = wall.getBoundingClientRect();

  const x = event.clientX - wallParameters.left - wall.clientLeft;
  const y = event.clientY - wallParameters.top - wall.clientTop;

  const spiderTop = y - spider.clientHeight / 2;
  const spiderLeft = x - spider.clientWidth / 2;

  const spiderRightMax = wall.clientWidth - spider.clientWidth;
  const spiderBottomMax = wall.clientHeight - spider.clientHeight;

  if (event.target.classList.contains('wall')) {
    if (spiderTop > spiderBottomMax) {
      spider.style.top = spiderBottomMax + 'px';
    } else if (spiderTop < 0) {
      spider.style.top = 0;
    } else {
      spider.style.top = spiderTop + 'px';
    }

    if (spiderLeft > spiderRightMax) {
      spider.style.left = spiderRightMax + 'px';
    } else if (spiderLeft < 0) {
      spider.style.left = 0;
    } else {
      spider.style.left = spiderLeft + 'px';
    }
  }
});
