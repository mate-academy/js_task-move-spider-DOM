'use strict';

const wall = document.querySelector('.wall');
const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

wall.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const halfSpiderWidth = spider.clientWidth / 2;
  const halfSpiderHeight = spider.clientHeight / 2;

  const cursorX = e.clientX - wall.offsetLeft - wall.clientLeft;
  const cursorY = e.clientY - wall.offsetTop - wall.clientTop;

  spider.style.top = `
    clamp(
      ${halfSpiderHeight}px,
      ${cursorY}px,
      ${wallHeight - halfSpiderHeight}px
    )
  `;

  spider.style.left = `
    clamp(
      ${halfSpiderWidth}px,
      ${cursorX}px,
      ${wallWidth - halfSpiderWidth}px
    )
  `;

  spider.style.transform = 'translate(-50%, -50%)';
});
