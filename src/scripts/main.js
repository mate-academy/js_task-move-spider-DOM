'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const offTop = wall.offsetTop + wall.clientTop;
  const offLeft = wall.offsetLeft + wall.clientLeft;

  const goLeft = e.clientX - offLeft - spider.clientWidth / 2;
  const goTop = e.clientY - offTop - spider.clientHeight / 2;

  const goRight = offLeft + wall.clientWidth - spider.clientWidth / 2;
  const goBottom = offTop + wall.clientHeight - spider.clientHeight / 2;

  const relativeX = e.clientX - offLeft;
  const relativeY = e.clientY - offTop;

  const link = e.target.closest('.wall');

  if (!link) {
    return;
  }

  if (goTop < 0 && goLeft < 0) {
    spider.style.left = '0px';
    spider.style.top = '0px';

    return;
  }

  if (goBottom < relativeY && goLeft < 0) {
    spider.style.left = '0px';
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  if (goTop < 0 && goRight < relativeX) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;

    spider.style.top = '0px';
    return;
  }

  if (goRight < relativeX && goBottom < relativeY) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  if (goLeft < 0) {
    spider.style.top = `${goTop}px`;
    spider.style.left = '0px';

    return;
  }

  if (goRight < relativeX) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    spider.style.top = `${goTop}px`;

    return;
  }

  if (goTop < 0) {
    spider.style.left = `${goLeft}px`;
    spider.style.top = '0px';

    return;
  }

  if (goBottom < relativeY) {
    spider.style.left = `${goLeft}px`;
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  spider.style.left = `${goLeft}px`;
  spider.style.top = `${goTop}px`;
});
