'use strict';

document.addEventListener('click', e => {
  if (e.target === document.body) {
    return;
  }

  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const border = (wall.offsetWidth - wall.clientWidth) / 2;

  const spiderSize = spider.width;
  const halfSpiderSize = spiderSize / 2;

  const spiderLeft = e.pageX - wall.offsetLeft - border;
  const spiderTop = e.pageY - wall.offsetTop - border;

  spider.style.transform = 'translate(-50%, -50%)';
  spider.style.left = `${spiderLeft}px`;
  spider.style.top = `${spiderTop}px`;

  if (spiderLeft <= halfSpiderSize) {
    spider.style.left = `${halfSpiderSize}px`;
  }

  if (spiderLeft >= wall.offsetWidth - spiderSize) {
    spider.style.left = `${(wall.offsetWidth) - (spiderSize - border / 2)}px`;
  }

  if (spiderTop <= halfSpiderSize) {
    spider.style.top = `${halfSpiderSize}px`;
  }

  if (spiderTop >= wall.offsetHeight - spiderSize) {
    spider.style.top = `${(wall.offsetHeight) - (spiderSize - border / 2)}px`;
  }
});
