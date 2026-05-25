'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target !== wall) {
    return;
  }

  const mouseX = e.offsetX;
  const mouseY = e.offsetY;

  let posLeft = mouseX - spider.offsetWidth / 2;
  let posTop = mouseY - spider.offsetHeight / 2;

  if (posLeft < 0) {
    posLeft = 0;
  }

  if (posTop < 0) {
    posTop = 0;
  }

  const maxLeft = wall.clientWidth - spider.offsetWidth;
  const maxTop = wall.clientHeight - spider.offsetHeight;

  if (posLeft > maxLeft) {
    posLeft = maxLeft;
  }

  if (posTop > maxTop) {
    posTop = maxTop;
  }

  spider.style.left = `${posLeft}px`;
  spider.style.top = `${posTop}px`;
});
