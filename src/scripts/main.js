'use strict';

const spider = document.querySelector('.spider');

document.querySelector('.wall').addEventListener('click', e => {
  let topCords = e.offsetY;
  let leftCords = e.offsetX;

  const maxWidth = document.querySelector('.wall')
    .clientWidth - document.querySelector('.spider').clientWidth / 2;
  const maxHeight = document.querySelector('.wall')
    .clientHeight - document.querySelector('.spider').clientHeight / 2;
  const minHeight = document.querySelector('.spider').clientHeight / 2;
  const minWidth = document.querySelector('.spider').clientHeight / 2;

  if (e.target.classList.contains('spider')) {
    if (parseFloat(spider.style.top) >= maxHeight
      || parseFloat(spider.style.top) <= minHeight
      || parseFloat(spider.style.left) <= minWidth
      || parseFloat(spider.style.left) >= maxWidth
    ) {
      return;
    }

    spider.style.top = `${parseFloat(spider.style.top)
      + topCords - minHeight}px`;

    spider.style.left = `${parseFloat(spider.style.left)
      + leftCords - minWidth}px`;

    return;
  }

  if (topCords < minHeight) {
    topCords = minHeight;
  }

  if (leftCords < minWidth) {
    leftCords = minWidth;
  }

  if (topCords > maxHeight) {
    topCords = maxHeight;
  }

  if (leftCords > maxWidth) {
    leftCords = maxWidth;
  }

  spider.style.top = `${topCords}px`;
  spider.style.left = `${leftCords}px`;
  spider.style.transform = 'translate(-50%, -50%)';
});
