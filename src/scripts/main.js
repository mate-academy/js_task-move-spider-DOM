'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

wall.addEventListener('click', e => {
  if (e.target === wall) {
    const xPlace = e.offsetX - spider.clientWidth / 2;
    const yPlace = e.offsetY - spider.clientHeight / 2;

    const minMaxWidth = [0, wall.clientWidth - spider.clientWidth, xPlace];
    const minMaxHeight = [0, wall.clientHeight - spider.clientHeight, yPlace];

    spider.style.left = `${minMaxWidth.sort((a, b) => a - b)[1]}px`;
    spider.style.top = `${minMaxHeight.sort((a, b) => a - b)[1]}px`;
  }
});
