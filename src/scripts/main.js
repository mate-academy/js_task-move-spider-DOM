'use strict';

document.addEventListener('click', e => {
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderHeight = parseFloat(window.getComputedStyle(spider).height);
  const spiderWidth = parseFloat(window.getComputedStyle(spider).width);

  const borderWidth = parseFloat(window.getComputedStyle(wall).borderWidth);

  const wallHeight = parseFloat(window.getComputedStyle(wall).height);
  const wallWidth = parseFloat(window.getComputedStyle(wall).width);

  const wallTop = wall.getBoundingClientRect().top + borderWidth;
  const wallLeft = wall.getBoundingClientRect().left + borderWidth;

  spider.style.top = `${e.clientY - wallTop - spiderHeight / 2}px`;
  spider.style.left = `${e.clientX - wallLeft - spiderWidth / 2}px`;

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = `0px`;
  }

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = `0px`;
  }

  if (parseFloat(spider.style.top) > wallHeight - spiderHeight) {
    spider.style.top = `${wallHeight - spiderHeight}px`;
  }

  if (parseFloat(spider.style.left) > wallWidth - spiderWidth) {
    spider.style.left = `${wallWidth - spiderWidth}px`;
  }
});
