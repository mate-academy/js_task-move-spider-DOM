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

  const link = e.target.closest('.wall');

  if (!link) {
    return;
  }

  if (goTop < 0 && goLeft < 0) {
    spider.style.left = '0px';
    spider.style.top = '0px';

    return;
  }

  if (goBottom < e.clientY && goLeft < 0) {
    spider.style.left = '0px';
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  if (goTop < 0 && goRight < e.clientX) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    spider.style.top = '0px';

    return;
  }

  if (goRight < e.clientX && goBottom < e.clientY) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  if (goLeft < 0) {
    spider.style.top = `${goTop}px`;
    spider.style.left = '0px';

    return;
  }

  if (goRight < e.clientX) {
    spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    spider.style.top = `${goTop}px`;

    return;
  }

  if (goTop < 0) {
    spider.style.left = `${goLeft}px`;
    spider.style.top = '0px';

    return;
  }

  if (goBottom < e.clientY) {
    spider.style.left = `${goLeft}px`;
    spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;

    return;
  }

  spider.style.left = `${goLeft}px`;
  spider.style.top = `${goTop}px`;
});
