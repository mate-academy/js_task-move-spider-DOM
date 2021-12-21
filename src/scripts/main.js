'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const zone = document.createElement('div');

zone.style.width = `${wall.offsetWidth - spider.offsetWidth}px`;
zone.style.height = `${wall.offsetHeight - spider.offsetHeight}px`;
zone.style.backgroundColor = 'red';
wall.append(zone);

wall.style.display = 'flex';
zone.style.margin = 'auto';


document.addEventListener('click', e => {
  if (e.target === zone) {
    const offsetX = zone.getBoundingClientRect().left;
    const offsetY = zone.getBoundingClientRect().top;

    spider.style.left = `${e.clientX - offsetX - 8}px`;
    spider.style.top = `${e.clientY - offsetY - 5}px`;
  }
});
