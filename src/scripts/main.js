'use strict';

const spider = document.querySelector('.spider');
const spiderStyles = getComputedStyle(spider);
const spiderHeight = parseFloat(spiderStyles.height);
const spiderWidth = parseFloat(spiderStyles.width);

document.addEventListener('click', e => {
  const wall = e.target;
  const wallStyles = getComputedStyle(wall);
  const wallHeight = parseFloat(wallStyles.height);
  const wallWidth = parseFloat(wallStyles.width);

  if (wall.classList.contains('wall')) {
    let spiderTop = (e.offsetY - spiderHeight / 2) >= 0
      ? e.offsetY - spiderHeight / 2
      : 0;
    let spiderDown = (e.offsetX - spiderWidth / 2) >= 0
      ? e.offsetX - spiderWidth / 2
      : 0;

    spiderTop = (spiderTop + spiderHeight) > wallHeight
      ? wallHeight - spiderHeight
      : spiderTop;

    spiderDown = (spiderDown + spiderWidth) > wallWidth
      ? wallWidth - spiderWidth
      : spiderDown;
    spider.style.top = `${spiderTop}px`;
    spider.style.left = `${spiderDown}px`;
  }
});
