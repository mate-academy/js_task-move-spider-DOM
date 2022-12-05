'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const halfSpiderSize = spider.clientHeight / 2;
  const wall = document.querySelector('.wall');

  const minClickX = (wall.offsetWidth - wall.clientWidth)
    / 2 + wall.offsetLeft;

  const maxClickX = (wall.offsetWidth - wall.clientWidth)
    / 2 + wall.offsetLeft + wall.clientWidth;

  const minClickY = (wall.offsetHeight - wall.clientHeight)
    / 2 + wall.offsetTop;

  const maxClickY = (wall.offsetHeight - wall.clientHeight)
    / 2 + wall.offsetTop + wall.clientHeight;

  const spiderMaxCoordsX = minClickX + wall.clientWidth - halfSpiderSize;

  const spiderMaxCoordsY = minClickY + wall.clientHeight - halfSpiderSize;

  if (e.target.className !== 'wall') {
    return;
  }

  if (parseInt(e.clientX) >= minClickX
    && parseInt(e.clientX) <= maxClickX) {
    spider.style.left = (e.clientX - minClickX - halfSpiderSize) + 'px';

    if (parseInt(spider.style.left) < 0
      && (parseInt(spider.style.left) + halfSpiderSize) >= 0) {
      spider.style.left = 0;
    }

    if (parseInt(spider.style.left) <= wall.clientWidth
      && (parseInt(e.clientX) >= spiderMaxCoordsX)) {
      spider.style.left = `${wall.clientWidth - spider.clientWidth}px`;
    }
  }

  if (parseInt(e.clientY) >= minClickY
    && parseInt(e.clientY) <= maxClickY) {
    spider.style.top = (e.clientY - minClickY - halfSpiderSize) + 'px';

    if (parseInt(spider.style.top) < 0
      && (parseInt(spider.style.top) + halfSpiderSize) >= 0) {
      spider.style.top = 0;
    }

    if (parseInt(spider.style.top) <= wall.clientHeight
      && (parseInt(e.clientY) >= spiderMaxCoordsY)) {
      spider.style.top = `${wall.clientHeight - spider.clientHeight}px`;
    }
  }
});
