/* eslint-disable no-undef */
// they sad "getComputedStyle is not undefined"
'use strict';

const spider = document.querySelector('.spider');
const spiderWidth = parseFloat(getComputedStyle(spider).width);
const spiderHeight = parseFloat(getComputedStyle(spider).height);

const wall = document.querySelector('.wall');

spider.style.transitionTimingFunction = 'linear';

const spiderMovings = function(event) {
  spider.style.left = `${getRightX(event.offsetX)}px`;
  spider.style.top = `${getRightY(event.offsetY)}px`;
};

wall.addEventListener('mousemove', spiderMovings);

function getRightX(eventX) {
  let x = eventX;

  if (x < 0 + spiderWidth / 2) {
    x = spiderWidth / 2;
  }

  if (x > wall.clientWidth - spiderWidth) {
    x = wall.clientWidth - spiderWidth / 2;
  }

  return x - spiderWidth / 2;
}

function getRightY(eventY) {
  let y = eventY;

  if (y < 0 + spiderHeight / 2) {
    y = spiderHeight / 2;
  }

  if (y > wall.clientHeight - spiderHeight) {
    y = wall.clientHeight - spiderHeight / 2;
  }

  return y - spiderHeight / 2;
}

let hadEatedCursor = false;

spider.addEventListener('mouseover', () => {
  if (!hadEatedCursor) {
    // eslint-disable-next-line max-len
    document.body.style.cursor = wall.style.cursor = spider.style.cursor = 'none';
    document.body.style.backgroundColor = 'red';
    hadEatedCursor = true;
    wall.removeEventListener('mousemove', spiderMovings);
    spider.style.transform = 'scale(1.5)';
    alert(`павучок з'їв курсор((`);
  }
});
