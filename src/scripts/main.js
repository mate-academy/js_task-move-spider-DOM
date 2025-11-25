'use strict';

const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const [mouseX, mouseY] = [e.clientX, e.clientY];

  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const [spiderWidth, spiderHeight] = [spiderRect.width, spiderRect.height];

  const [targetLeftOut, targetTopOut, clLeft, clTop] = [
    wall.getBoundingClientRect().left,
    wall.getBoundingClientRect().top,
    wall.clientLeft,
    wall.clientTop,
  ];

  let leftX = mouseX - targetLeftOut - clLeft;
  let topY = mouseY - targetTopOut - clTop;

  leftX = Math.min(
    Math.max(leftX, spiderWidth / 2),
    wall.clientWidth - spiderWidth / 2,
  );

  topY = Math.min(
    Math.max(topY, spiderHeight / 2),
    wall.clientHeight - spiderHeight / 2,
  );

  spider.style.left = leftX + 'px';
  spider.style.top = topY + 'px';

  spider.style.transform = 'translate(-50%, -50%)';
});
