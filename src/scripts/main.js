'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', e => {
  function moveSpider(offset, wallWidth, spiderWidth) {
    if (offset > wallWidth - spiderWidth) {
      return wallWidth - spiderWidth + 'px';
    } else if (offset < spiderWidth) {
      return 0 + 'px';
    } else {
      return offset - spiderWidth / 2 + 'px';
    }
  }

  spider.style.left = moveSpider(
    e.offsetX, wall.clientWidth, spider.offsetWidth
  );

  spider.style.top = moveSpider(
    e.offsetY, wall.clientHeight, spider.offsetHeight
  );
});
