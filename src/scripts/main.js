'use strict';

const spider = document.querySelector('.spider');
const { clientWidth: spiderWidth, clientHeight: spiderHeight } = spider;

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const { left, top: wallTop } = wall.getBoundingClientRect();
  const wallStyles = window.getComputedStyle(wall);

  const borderWidthLeft = parseFloat(wallStyles.borderLeftWidth);
  const borderWidthTop = parseFloat(wallStyles.borderTopWidth);

  let x = e.clientX - left - spiderWidth / 2 - borderWidthLeft;

  let y = e.clientY - wallTop - spiderHeight / 2 - borderWidthTop;

  if (x < 0) {
    x = 0;
  }

  if (y < 0) {
    y = 0;
  }

  if (x + spiderWidth > wall.clientWidth) {
    x = wall.clientWidth - spiderWidth;
  }

  if (y + spiderHeight > wall.clientHeight) {
    y = wall.clientHeight - spiderHeight;
  }

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
