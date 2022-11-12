'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  };

  spider.style.top = e.clientY
  - document.documentElement.clientHeight / 2
  + wall.clientHeight / 2
  - spider.height / 2 + 'px';

  spider.style.left = e.clientX
  - document.documentElement.clientWidth / 2
  + wall.clientWidth / 2
  - spider.width / 2 + 'px';

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = 0;
  }

  const maxSpiderLeft = wall.clientWidth - spider.width;

  if (parseFloat(spider.style.left) > maxSpiderLeft) {
    spider.style.left = maxSpiderLeft + 'px';
  }

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = 0;
  }

  const maxSpiderTop = wall.clientHeight - spider.width;

  if (parseFloat(spider.style.top) > maxSpiderTop) {
    spider.style.top = maxSpiderTop + 'px';
  }
});
