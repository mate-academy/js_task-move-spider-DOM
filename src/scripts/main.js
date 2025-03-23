/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

spider.style.pointerEvents = 'none';

wall.addEventListener('click', (event) => {
  if(event.target.matches('.spider')) {
    return;
  }


  const x = Math.min(Math.max(spider.offsetWidth / 2,
    event.offsetX), wall.clientWidth - spider.offsetWidth / 2);
  const y = Math.min(Math.max(spider.offsetHeight / 2,
    event.offsetY), wall.clientHeight - spider.offsetHeight / 2);

  spider.style.translate = `calc(${x}px - 50%) calc(${y}px - 50%)`;
});
