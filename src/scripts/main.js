'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const spider = document.querySelector('.spider');

  const clickX = e.clientX;
  const clickY = e.clientY;

  if (clickX >= wallRect.x && clickX <= wallRect.x + wallRect.width) {
    if (clickY >= wallRect.y && clickY <= wallRect.y + wallRect.height) {
      let spiderTop =
        clickY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

      let spiderLeft =
        clickX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;

      if (spiderTop < 0) {
        spiderTop = 0;
      }

      if (spiderLeft < 0) {
        spiderLeft = 0;
      }

      if (spiderTop + spider.clientHeight > wall.clientHeight) {
        spiderTop = wall.clientHeight - spider.clientHeight;
      }

      if (spiderLeft + spider.clientWidth > wall.clientWidth) {
        spiderLeft = wall.clientWidth - spider.clientWidth;
      }

      spider.style.top = spiderTop + 'px';
      spider.style.left = spiderLeft + 'px';
    }
  }
});
