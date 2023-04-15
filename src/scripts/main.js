'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  let wallTop = e.clientY - (spider.clientHeight / 2);

  wallTop -= wall.offsetTop + wall.clientTop;

  let wallLeft = e.clientX - (spider.clientWidth / 2);

  wallLeft -= wall.offsetLeft + wall.clientLeft;

  if (wallTop < 0) {
    wallTop = 0;
  } else if (wallTop >= 350) {
    wallTop = 350;
  };

  if (wallLeft < 0) {
    wallLeft = 0;
  } else if (wallLeft >= 350) {
    wallLeft = 350;
  };

  spider.style.top = `${wallTop}px`;
  spider.style.left = `${wallLeft}px`;
});
