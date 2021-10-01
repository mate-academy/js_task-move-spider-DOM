'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

spider.onclick = (e) => {
  e.preventDefault();
  // expected spider to stop moving to start position, but it still does...
  alert(`no poking, please. Heading back to start.`);
};

document.addEventListener('click', e => {
  // write code here
  const x = e.offsetX;
  const y = e.offsetY;
  // '.offset[X|Y]' provides px from boundaries of a parent element =>
  // => (will lessen calculations compared to '.client[X|Y]')

  const maxX = wall.clientWidth - spider.width / 2;
  const maxY = wall.clientHeight - spider.height / 2;

  let spiderLeft;
  let spiderTop;

  if (e.target.closest('.wall')) {
  // cuts-off all clicks outside '.wall' class
  // all adjustments `-[.width|.height] / 2` below
  // mitigate an issue of not centered spider when clicking `max[X|Y]`
    if (x > maxX) {
      spiderLeft = maxX - spider.width / 2;
    } else if (x - spider.width / 2 < 0) {
      spiderLeft = 0;
    } else {
      spiderLeft = x - spider.width / 2;
    }

    if (y > maxY) {
      spiderTop = maxY - spider.height / 2;
    } else if (y - spider.height / 2 < 0) {
      spiderTop = 0;
    } else {
      spiderTop = y - spider.width / 2;
    }

    spider.style.left = `${spiderLeft}px`;
    spider.style.top = `${spiderTop}px`;
    spider.style.transition = '0.3s';
  }
});
