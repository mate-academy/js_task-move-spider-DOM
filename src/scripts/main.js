'use strict';

const wall = document.querySelector('.wall');
const spider = wall.querySelector('.spider');

wall.addEventListener('click', e => {
  const wallTop = (wall.parentElement.offsetHeight - wall.offsetHeight) / 2;
  const wallLeft = (wall.parentElement.offsetWidth - wall.offsetWidth) / 2;
  const halfSpider = spider.offsetWidth / 2;

  const spiderPlace = {
    spiderLeft: e.clientX - wall.clientLeft - wallLeft - halfSpider,
    spiderTop: e.clientY - wall.clientTop - wallTop - halfSpider,
  };

  if (spiderPlace.spiderLeft < 0) {
    spiderPlace.spiderLeft = 0;
  }

  if (wall.clientWidth < spider.offsetWidth + spiderPlace.spiderLeft) {
    spiderPlace.spiderLeft = (wall.clientWidth - spider.clientWidth);
  }

  if (spiderPlace.spiderTop < 0) {
    spiderPlace.spiderTop = 0;
  }

  if (wall.clientHeight < spider.offsetHeight + spiderPlace.spiderTop) {
    spiderPlace.spiderTop = (wall.clientHeight - spider.clientHeight);
  }

  spider.style.top = spiderPlace.spiderTop + 'px';
  spider.style.left = spiderPlace.spiderLeft + 'px';
});
