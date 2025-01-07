'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const moveSpider = (e) => {
  const wallRect = wall.getBoundingClientRect();
  const computedStyle = window.getComputedStyle(wall);
  const borderLeft = parseInt(computedStyle.borderLeftWidth);
  const borderTop = parseInt(computedStyle.borderTopWidth);

  const currentPositionCursorX = e.clientX - wallRect.left - borderLeft;
  const currentPositionCursorY = e.clientY - wallRect.top - borderTop;

  const posSpiderX = spider.clientWidth / 2;
  const posSpiderY = spider.clientHeight / 2;

  const contentWidth = wallRect.width - borderLeft * 2;
  const contentHeight = wallRect.height - borderTop * 2;

  const newX = Math.min(
    Math.max(posSpiderX, currentPositionCursorX),
    contentWidth - posSpiderX,
  );

  const newY = Math.min(
    Math.max(posSpiderY, currentPositionCursorY),
    contentHeight - posSpiderY,
  );

  spider.style.left = `${newX - posSpiderX}px`;
  spider.style.top = `${newY - posSpiderY}px`;
};

wall.addEventListener('click', moveSpider);
