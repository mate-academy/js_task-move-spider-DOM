'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  // write code here
  const element = document.elementFromPoint(e.clientX, e.clientY);

  if (!element.classList.contains('wall')) {
    return;
  }

  let x = e.clientX - element.offsetLeft - (spider.clientWidth / 2);
  let y = e.clientY - element.offsetTop - (spider.clientHeight / 2);

  if (x < 0) {
    x += (spider.clientWidth / 2);
  }

  if (x > (element.clientWidth - (spider.clientWidth / 2))) {
    x = element.clientWidth - spider.clientWidth;
  }

  if (y < 0) {
    y += (spider.clientHeight / 2);
  }

  if (y > (element.offsetTop - (spider.clientWidth / 2))) {
    y = element.clientHeight - spider.clientHeight;
  }

  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
