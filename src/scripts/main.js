'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = e.target.closest('.wall');

  if (wall) {
    const spider = wall.children[0];
    // eslint-disable-next-line no-undef
    const border = parseInt(getComputedStyle(wall).borderWidth);
    const spiderXMin = spider.offsetWidth / 2 + border;
    const spiderYMin = spider.offsetHeight / 2 + border;
    const spiderXMax = wall.offsetWidth - spiderXMin;
    const spiderYMax = wall.offsetHeight - spiderYMin;

    let computedLeft = e.layerX;
    let computedTop = e.layerY;

    if (e.target === spider) {
      computedLeft = e.layerX + spider.offsetLeft + border;
      computedTop = e.layerY + spider.offsetTop + border;
    }

    if (computedLeft < spiderXMin) {
      computedLeft = spiderXMin;
    } else if (computedLeft > spiderXMax) {
      computedLeft = spiderXMax;
    }

    if (computedTop < spiderYMin) {
      computedTop = spiderYMin;
    } else if (computedTop > spiderYMax) {
      computedTop = spiderYMax;
    }

    spider.style.left = `${computedLeft - spiderYMin}px`;
    spider.style.top = `${computedTop - spiderYMin}px`;
  }
});
