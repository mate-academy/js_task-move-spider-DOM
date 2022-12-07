'use strict';

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  }

  const bodyWidth = document.body.clientWidth;
  const bodyHeight = document.body.clientHeight;
  const wall = document.querySelector('.wall');
  const wallWidth = parseFloat(getComputedStyle(wall).width);
  const wallHeight = parseFloat(getComputedStyle(wall).height);
  const spider = document.querySelector('.spider');
  const spiderWidth = parseFloat(getComputedStyle(spider).width);
  const spiderHeight = parseFloat(getComputedStyle(spider).height);
  const spiderLeft = e.clientX
    - ((bodyWidth - wallWidth) / 2) - (spiderWidth / 2);
  const spiderTop = e.clientY
    - ((bodyHeight - wallHeight) / 2) - (spiderHeight / 2);
  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  if (spiderLeft < 0) {
    spider.style.left = 0;
  } else if (spiderLeft > maxLeft) {
    spider.style.left = `${maxLeft}px`;
  } else {
    spider.style.left = `${spiderLeft}px`;
  }

  if (spiderTop < 0) {
    spider.style.top = 0;
  } else if (spiderTop > maxTop) {
    spider.style.top = `${maxTop}px`;
  } else {
    spider.style.top = `${spiderTop}px`;
  }
});
