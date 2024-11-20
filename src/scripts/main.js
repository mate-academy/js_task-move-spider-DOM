'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const clickableField = e.target.closest('.wall');

  const boundariesWall = wall.getBoundingClientRect();
  const boundariesSpider = spider.getBoundingClientRect();

  if (!clickableField) {
    return;
  }

  const borderOfWall = wall.clientTop;
  const halfSpiderWidth = boundariesSpider.width / 2;
  const halfSpiderHeight = boundariesSpider.height / 2;

  let newLeft =
    e.clientX - boundariesWall.left - halfSpiderWidth - borderOfWall;

  let newTop = e.clientY - boundariesWall.top - halfSpiderHeight - borderOfWall;

  newLeft = Math.max(
    0,
    Math.min(newLeft, wall.clientWidth - boundariesSpider.width),
  );

  newTop = Math.max(
    0,
    Math.min(newTop, wall.clientHeight - boundariesSpider.height),
  );

  spider.style.left = newLeft + 'px';
  spider.style.top = newTop + 'px';
});
