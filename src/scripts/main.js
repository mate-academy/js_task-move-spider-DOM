'use strict';

document.addEventListener('click', e => {
  // write code here
  if (e.target.className !== 'wall') {
    return;
  }

  const spider = document.querySelector('.spider');
  const halfSpiderSize = spider.clientHeight / 2;
  const wall = document.querySelector('.wall');
  const wallLimit = wall.clientWidth - halfSpiderSize * 2;

  
  const [left, top] = [e.offsetX, e.offsetY].map((el) => {
    const coordinate = el - halfSpiderSize;

    if (coordinate > wallLimit || coordinate < 0) {
      return coordinate > wallLimit ? wallLimit : 0;
    }

    return coordinate;
  });

  spider.style.top = top + 'px';
  spider.style.left = left + 'px';
});
