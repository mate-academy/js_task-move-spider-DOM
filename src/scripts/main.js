'use strict';

const wall = document.querySelector('.wall');

const spider = document.querySelector('.spider');

const wallParam = wall.getBoundingClientRect();

wall.addEventListener('click', (e) => {
  // write code here
  let left = Math.min(
    e.clientX - wall.offsetLeft - spider.clientWidth / 2 - wall.clientLeft,
    wallParam.right -
      wall.offsetLeft -
      2 * wall.clientLeft -
      spider.clientWidth,
  );

  let topS = Math.min(
    e.clientY - wall.offsetTop - spider.clientHeight / 2 - wall.clientTop,
    wallParam.bottom -
      wall.offsetTop -
      2 * wall.clientTop -
      spider.clientHeight,
  );

  left = Math.max(0, left);
  topS = Math.max(0, topS);

  spider.style.left = left + 'px';
  spider.style.top = topS + 'px';
});
