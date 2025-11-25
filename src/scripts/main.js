'use strict';

const wall = document.querySelector('div.wall');
const spiderImg = document.querySelector('img.spider');

document.addEventListener('click', (e) => {
  if (!e.target.closest('div.wall')) {
    return;
  }

  const rect = wall.getBoundingClientRect();
  const y = e.clientY - rect.top;
  const x = e.clientX - rect.left;

  const spiderWidth = spiderImg.offsetWidth;
  const spiderHeight = spiderImg.offsetHeight;

  const wallWidth = wall.offsetWidth;
  const wallHeight = wall.offsetHeight;

  let newY = y - spiderHeight / 2;
  let newX = x - spiderWidth / 2;

  newX = Math.max(0, Math.min(newX, wallWidth - spiderWidth));
  newY = Math.max(0, Math.min(newY, wallHeight - spiderHeight));

  spiderImg.style.left = newX + 'px';
  spiderImg.style.top = newY + 'px';
});
