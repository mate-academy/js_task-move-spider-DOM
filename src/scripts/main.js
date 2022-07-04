'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
const rect = wall.getBoundingClientRect();

document.addEventListener('click', e => {
  const crossTop = (e.clientY - (spider.height / 2 + 10) < rect.top)
  || e.clientY < rect.top + parseInt(getComputedStyle(wall).border);

  const crossBottom = (e.clientY + (spider.height / 2 + 10) > rect.bottom)
  || e.clientY > rect.bottom - parseInt(getComputedStyle(wall).border
  );

  const crossLeft
   = e.clientX < rect.left + parseInt(getComputedStyle(wall).border)
   || (e.clientX - (spider.width / 2) < rect.left);

  const crosRight
  = e.clientX > rect.right + parseInt(getComputedStyle(wall).border)
  || (e.clientX + (spider.width / 2) > rect.right);

  if (!crossTop && !crossBottom) {
    spider.style.top = `${e.clientY
      - wall.offsetTop - (spider.height / 2 + 12)}px`;
  } else if (crossTop) {
    spider.style.top = 0;
  } else if (crossBottom) {
    spider.style.top = `${parseInt(getComputedStyle(wall).height)
      - spider.height}px`;
  }

  if (!crossLeft && !crosRight) {
    spider.style.left = `${e.clientX
      - wall.offsetLeft - (spider.width / 2 + 7)}px`;
  } else if (crossLeft) {
    spider.style.left = 0;
  } else if (crosRight) {
    spider.style.left = `${parseInt(getComputedStyle(wall).width)
      - spider.width}px`;
  }
});
