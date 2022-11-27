'use strict';
document.addEventListener('click', e => {
  if (!e.target.closest('.wall')) {
    return;
  };

  const wall = document.querySelector('.wall');
  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;

  const spider = document.querySelector('.spider');
  const spiderWidth = spider.clientWidth;
  const spiderHeight = spider.clientHeight;

  let x = (e.offsetY - spiderHeight / 2);
  let y = (e.offsetX - spiderWidth / 2);

  spider.style.top = x + 'px';
  spider.style.left = y + 'px';

  if (x < 0) {
    spider.style.top = '0px';
  };

  if (y < 0) {
    spider.style.left = '0px';
  };

  if (x > (wallHeight - spiderHeight)) {
    spider.style.top = wallHeight - spiderHeight + 'px';
  };

  if (y > (wallWidth - spiderWidth)) {
    spider.style.left = wallWidth - spiderWidth + 'px';
  };
});
