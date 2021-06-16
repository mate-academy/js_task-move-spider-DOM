'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const target = e.target;
  let newY;
  let newX;
  const coordX = target.offsetLeft + target.clientLeft + spider.offsetWidth / 2;
  const coordY = target.offsetTop + target.clientTop + spider.offsetHeight / 2;
  const lengthX = target.clientWidth - spider.offsetWidth;
  const lengthY = target.clientHeight - spider.offsetHeight;

  if (target.className !== 'wall') {
    return;
  }

  if (e.clientY > (coordY + lengthY)) {
    newY = lengthY;
  } else if (e.clientY < coordY) {
    newY = 0;
  } else {
    newY = e.clientY - coordY;
  };

  if (e.clientX > (coordX + lengthX)) {
    newX = lengthX;
  } else if (e.clientX < coordX) {
    newX = 0;
  } else {
    newX = e.clientX - coordX;
  };

  spider.style.top = newY + 'px';
  spider.style.left = newX + 'px';
});
