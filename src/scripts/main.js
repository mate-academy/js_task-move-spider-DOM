'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  spider.style.pointerEvents = 'none';

  if (!e.target.closest('.wall')) {
    return;
  }

  const maxLeft = wall.clientWidth - spider.clientWidth;
  const maxTop = wall.clientHeight - spider.clientHeight;

  let spiderTop = e.offsetY - (spider.clientHeight / 2);
  let spiderLeft = e.offsetX - (spider.clientWidth / 2);

  if (spiderTop > maxTop) {
    spiderTop = maxTop;
  }

  if (spiderLeft > maxLeft) {
    spiderLeft = maxLeft;
  }

  if (spiderLeft < 0) {
    spiderLeft = 0;
  }

  if (spiderTop < 0) {
    spiderTop = 0;
  }

  spider.style.transform = `translate(${spiderLeft}px, ${spiderTop}px)`;
});
