'use strict';

document.addEventListener('click', function(e) {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spider = wall.querySelector('.spider');
  const wallCoords = wall.getBoundingClientRect();
  let spiderLeft = (
    e.clientX - wallCoords.left - wall.clientLeft - spider.offsetWidth / 2
  );

  if (spiderLeft < 0) {
    spiderLeft = 0;
  } else if (spiderLeft + spider.offsetWidth > wall.clientWidth) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  let spiderTop = (
    e.clientY - wallCoords.top - wall.clientTop - spider.offsetHeight / 2
  );

  if (spiderTop < 0) {
    spiderTop = 0;
  } else if (spiderTop + spider.offsetHeight > wall.clientHeight) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  spider.style.left = spiderLeft + 'px';
  spider.style.top = spiderTop + 'px';
});
