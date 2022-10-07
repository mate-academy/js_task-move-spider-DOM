'use strict';

const spider = document.querySelector('.spider');

document.querySelector('.wall').addEventListener('click', e => {
  let topCords = e.offsetY;
  let leftCords = e.offsetX;

  const spiderWidth = document.querySelector('.spider').clientWidth;
  const spiderHeight = document.querySelector('.spider').clientHeight;
  const wallWidth = document.querySelector('.wall').clientWidth;
  const wallHeight = document.querySelector('.wall').clientHeight;

  const maxWidth = wallWidth - spiderWidth / 2;
  const maxHeight = wallHeight - spiderHeight / 2;
  const minHeight = spiderHeight / 2;
  const minWidth = spiderHeight / 2;

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
