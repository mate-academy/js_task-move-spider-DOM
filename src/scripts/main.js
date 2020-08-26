/* eslint-disable no-undef */
// they sad "getComputedStyle is not undefined"
'use strict';

const spider = document.querySelector('.spider');
const spiderSide = parseFloat(getComputedStyle(spider).width);

const wall = document.querySelector('.wall');

spider.style.transitionTimingFunction = 'linear';

const spiderMovings = function(event) {
  spider.style.left = `${getDisplacement(event.offsetX)}px`;
  spider.style.top = `${getDisplacement(event.offsetY)}px`;
};

wall.addEventListener('mousemove', spiderMovings);

function getDisplacement(initialCoord) {
  let n = initialCoord;

  if (n < 0 + spiderSide / 2) {
    n = spiderSide / 2;
  }

  if (n > wall.clientWidth - spiderSide) {
    n = wall.clientWidth - spiderSide / 2;
  }

  return n - spiderSide / 2;
}

let hadEatenCursor = false;

spider.addEventListener('mouseover', () => {
  if (!hadEatenCursor) {
    // eslint-disable-next-line max-len
    document.body.style.cursor = wall.style.cursor = spider.style.cursor = 'none';
    document.body.style.backgroundColor = 'red';
    hadEatenCursor = true;
    wall.removeEventListener('mousemove', spiderMovings);
    spider.style.transform = 'scale(1.5)';
    alert(`павучок з'їв курсор((`);
  }
});
