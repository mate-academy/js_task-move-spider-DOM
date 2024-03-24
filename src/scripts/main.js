'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const offsetTop = wall.offsetTop;
  const offsetBottom = offsetTop + wall.offsetHeight;
  const fieldSet = wall.clientTop + spider.clientHeight / 2;
  const paddingTop = offsetTop + fieldSet;
  const paddingBottom = offsetBottom - fieldSet;

  const offsetLeft = wall.offsetLeft;
  const offsetRight = offsetLeft + wall.offsetWidth;
  const paddingLeft = offsetLeft + fieldSet;
  const paddingRight = offsetRight - fieldSet;

  if (e.clientY < offsetTop || e.clientY > offsetBottom) {
    return;
  }

  if (e.clientX < offsetLeft || e.clientX > offsetRight) {
    return;
  }

  if (e.clientY > offsetTop && e.clientY < paddingTop) {
    spider.style.top = '0px';
  } else {
    spider.style.top = e.clientY - paddingTop + 'px';
  }

  if (e.clientX > offsetLeft && e.clientX < paddingLeft) {
    spider.style.left = '0px';
  } else {
    spider.style.left = e.clientX - paddingLeft + 'px';
  }

  if (e.clientY > offsetTop && e.clientY > paddingBottom) {
    spider.style.top = wall.offsetHeight - fieldSet * 2 + 'px';
  }

  if (e.clientX > offsetLeft && e.clientX > paddingRight) {
    spider.style.left = wall.offsetWidth - fieldSet * 2 + 'px';
  }
});
