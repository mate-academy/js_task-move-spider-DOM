'use strict';

const spider = document.querySelector('.spider');
const fieldDiv = document.querySelector('.wall');

fieldDiv.addEventListener('click', (e) => {
  // coords our field
  const coordsTop = fieldDiv.offsetTop + fieldDiv.clientTop;
  const coordsLeft = fieldDiv.offsetLeft + fieldDiv.clientLeft;

  // find out coords our spider
  let spiderCoordsTop = e.clientY - coordsTop - spider.clientHeight / 2;
  let spiderCoordsLeft = e.clientX - coordsLeft - spider.clientWidth / 2;

  // prohibit crossing the top field

  if (spiderCoordsTop < 0) {
    spiderCoordsTop = 0;
  };

  // prohibit crossing the bottom field

  if (spiderCoordsTop + spider.clientHeight > fieldDiv.clientHeight) {
    spiderCoordsTop = fieldDiv.clientHeight - spider.clientHeight;
  };

  // prohibit crossing the left field
  if (spiderCoordsLeft < 0) {
    spiderCoordsLeft = 0;
  };

  // prohibit crossing the right field
  if (spiderCoordsLeft + spider.clientWidth > fieldDiv.clientWidth) {
    spiderCoordsLeft = fieldDiv.clientWidth - spider.clientWidth;
  };
  spider.style.top = spiderCoordsTop + 'px';
  spider.style.left = spiderCoordsLeft + 'px';
});
