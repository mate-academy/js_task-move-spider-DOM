'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const item = e.target.closest('.wall');

  if (!item || !wall.contains(item) || e.target === spider) {
    return null;
  }

  const point = (direction = 'offsetX', prop = 'clientWidth') => {
    let spiderCenter = e[direction] - spider[prop] / 2;
    const spaceToPoint = (wall[prop] - spider[prop] / 2);

    if (e[direction] > spaceToPoint) {
      spiderCenter -= e[direction] - spaceToPoint;
    }

    return spiderCenter < 0 ? 0 : spiderCenter;
  };

  spider.style.left = `${point()}px`;
  spider.style.top = `${point('offsetY', 'clientHeight')}px`;
});
