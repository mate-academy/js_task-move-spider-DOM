'use strict';

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const halfSpiderSize = spider.clientHeight / 2;
  const wall = document.querySelector('.wall');
  const wallLimit = wall.clientWidth - halfSpiderSize * 2;

  const [x, y] = [e.offsetX, e.offsetY].map((el) => {
    const coordinate = el - halfSpiderSize;

    if (coordinate > wallLimit || coordinate < 0) {
      return coordinate > wallLimit ? wallLimit : 0;
    }

    return coordinate;
  });

  spider.style.left = x + 'px';
  spider.style.top = y + 'px';
});
