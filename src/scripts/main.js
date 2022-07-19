'use strict';

const elSpider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target.className === 'wall') {
    const maxX = e.target.clientWidth - elSpider.clientWidth;
    const maxY = e.target.clientHeight - elSpider.clientHeight;
    let X = e.offsetX - elSpider.clientWidth / 2;
    let Y = e.offsetY - elSpider.clientHeight / 2;

    [X, Y] = [X < 0 ? 0 : X, Y < 0 ? 0 : Y];
    [X, Y] = [X > maxX ? maxX : X, Y > maxY ? maxY : Y];

    elSpider.style.transform = `translate(${X}px, ${Y}px)`;
  }
});
