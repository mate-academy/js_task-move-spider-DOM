'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if ((!e.target.classList.contains('wall'))
    && (!e.target.classList.contains('spider'))) {
    return;
  }

  const borderLeft = wall.offsetLeft + (spider.clientWidth / 2);
  const borderTop = wall.offsetTop + (spider.clientTop / 2);
  let xCoordenat = e.clientX - borderLeft - wall.clientLeft;
  let yCoordenat = e.clientY - borderTop - wall.clientTop
  - (spider.clientWidth / 2);

  if (xCoordenat < 0) {
    xCoordenat = 0;
  };

  if (xCoordenat >= wall.clientWidth - spider.clientWidth) {
    xCoordenat = wall.clientWidth - spider.clientWidth;
  }

  if (yCoordenat < 0) {
    yCoordenat = 0;
  };

  if (yCoordenat >= wall.clientHeight - spider.clientHeight) {
    yCoordenat = wall.clientHeight - spider.clientHeight;
  }
  spider.style.left = `${xCoordenat}px`;
  spider.style.top = `${yCoordenat}px`;
});
