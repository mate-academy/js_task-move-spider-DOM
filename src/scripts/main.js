'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    // eslint-disable-next-line no-useless-return
    return;
  }

  let moveHorizontal = e.offsetY - (spider.clientHeight / 2);
  let moveVertical = e.offsetX - (spider.clientWidth / 2);

  const maxClickHeight = wall.clientHeight - spider.clientHeight;
  const maxClickWidth = wall.clientWidth - spider.clientWidth;

  if (moveHorizontal < 0) {
    moveHorizontal = 0;
  }

  if (moveVertical < 0) {
    moveVertical = 0;
  }

  if (moveHorizontal > maxClickHeight) {
    spider.style.top = `${maxClickHeight}px`;
  } else {
    spider.style.top = `${moveHorizontal}px`;
  }

  if (moveVertical > maxClickWidth) {
    spider.style.left = `${maxClickWidth}px`;
  } else {
    spider.style.left = `${moveVertical}px`;
  }
});
