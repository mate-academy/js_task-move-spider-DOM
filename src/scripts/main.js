'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = wall.querySelector('.spider');
  const clicked = e.target.closest('.wall');
  const propertyWall = wall.getBoundingClientRect();
  const propertySpider = spider.getBoundingClientRect();

  if (!clicked) {
    return 0;
  } else {
    let tp =
      e.clientY - propertyWall.top - propertySpider.height / 2 - wall.clientTop;
    let left =
      e.clientX -
      propertyWall.left -
      propertySpider.width / 2 -
      wall.clientLeft;

    left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
    tp = Math.max(0, Math.min(tp, wall.clientHeight - spider.offsetHeight));

    spider.style.top = tp + 'px';
    spider.style.left = left + 'px';
  }
});
