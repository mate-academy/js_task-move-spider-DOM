'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }

  function moveSpider(offset, wallWidth, spiderSize) {
    if (offset > wallWidth - spiderSize) {
      return wallWidth - spiderSize + 'px';
    } else if (offset < spiderSize) {
      return 0 + 'px';
    } else {
      return offset - spiderSize / 2 + 'px';
    }
  }

  spider.style.left = moveSpider(
    e.offsetX, wall.clientWidth, spider.offsetWidth
  );

  spider.style.top = moveSpider(
    e.offsetY, wall.clientHeight, spider.offsetHeight
  );
});
