'use strict';

const spider = document.querySelector('.spider');
const spiderSize = parseFloat(getComputedStyle(spider).height);
const wall = document.querySelector('.wall');
const wallSize = parseFloat(getComputedStyle(wall).height);

document.addEventListener('click', e => {
  const x = e.offsetX;
  const y = e.offsetY;

  function calculation(number) {
    if (number < spiderSize / 2) {
      return spiderSize / 2 - number;
    }

    if ((number - wallSize + spiderSize / 2) > 0) {
      return (number - wallSize + spiderSize / 2) * -1;
    }

    return 0;
  };

  if (e.target === wall) {
    spider.style.left = `${x - spiderSize / 2 + calculation(x)}px`;
    spider.style.top = `${y - spiderSize / 2 + calculation(y)}px`;
  }

  if (e.target === spider) {
    spider.style.top = 0;
    spider.style.left = 0;
  }
});
