'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const target = e.target.closest('.wall');

  if (!target) {
    return;
  }

  spider.style.left = coords(
    e.clientX,
    wall.offsetLeft,
    spider.offsetWidth,
    wall.clientWidth,
    wall.clientLeft,
  );

  spider.style.top = coords(
    e.clientY,
    wall.offsetTop,
    spider.offsetHeight,
    wall.clientHeight,
    wall.clientTop,
  );
});

function coords(posCursor, parentLeft, childWidth, parentWidth, border) {
  let coord = null;

  coord = posCursor - parentLeft - childWidth / 2 - border + 'px';

  if (posCursor < parentLeft + border + childWidth / 2) {
    coord = '0px';
  }

  if (posCursor > parentLeft + parentWidth + border - childWidth / 2) {
    coord = parentWidth - childWidth + 'px';
  }

  return coord;
}
