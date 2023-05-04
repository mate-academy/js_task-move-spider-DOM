'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  };

  const maxTop = wall.clientHeight - spider.clientHeight;
  const maxLeft = wall.clientWidth - spider.clientWidth;

  let posTop = e.offsetY - (spider.clientHeight / 2);
  let posLeft = e.offsetX - (spider.clientWidth / 2);

  if (posTop > maxTop) {
    posTop = maxTop;
  }

  if (posLeft > maxLeft) {
    posLeft = maxLeft;
  }

  if (posTop < 0) {
    posTop = 0;
  }

  if (posLeft < 0) {
    posLeft = 0;
  }

  spider.style.top = `${posTop}px`;
  spider.style.left = `${posLeft}px`;
});
