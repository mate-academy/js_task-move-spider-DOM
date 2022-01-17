'use strict';

document.addEventListener('click', e => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const spDom = spider.getBoundingClientRect();
  const wallDom = wall.getBoundingClientRect();

  const spiderHeight = spDom.height;
  const spiderWidth = spDom.width;

  if (e.clientY >= wallDom.top
    && e.clientY <= wallDom.bottom
    && e.clientX >= wallDom.left
    && e.clientX <= wallDom.right) {
    let spiderTop = e.clientY - spiderHeight
      / 2 - wall.offsetTop - wall.clientTop;
    let spiderLeft = e.clientX - spiderWidth
     / 2 - wall.offsetLeft - wall.clientLeft;

    if (spiderTop < 0) {
      spiderTop = 0;
    }

    if (spiderLeft < 0) {
      spiderLeft = 0;
    }

    if (spiderTop + spiderHeight > wall.clientHeight) {
      spiderTop = wall.clientHeight - spiderHeight;
    }

    if (spiderLeft + spiderWidth > wall.clientWidth) {
      spiderLeft = wall.clientWidth - spiderWidth;
    }

    spider.style.top = spiderTop + 'px';
    spider.style.left = spiderLeft + 'px';
  }
});
