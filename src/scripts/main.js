'use strict';

const spiderElement = document.querySelector('.spider');
const wallElement = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const rect = wallElement.getBoundingClientRect();

  const coordY = e.clientY - rect.top;
  const coordX = e.clientX - rect.left;

  const spiderHeight = parseFloat(getComputedStyle(spiderElement).height);
  const spiderWidth = parseFloat(getComputedStyle(spiderElement).width);

  const wallWidth = wallElement.clientWidth;
  const wallHeight = wallElement.clientHeight;

  const maxLeft = wallWidth - spiderWidth;
  const maxTop = wallHeight - spiderHeight;

  let newLeft = coordX - spiderWidth / 2;
  let newTop = coordY - spiderHeight / 2;

  newLeft = Math.max(0, Math.min(newLeft, maxLeft));
  newTop = Math.max(0, Math.min(newTop, maxTop));

  spiderElement.style.left = newLeft + 'px';
  spiderElement.style.top = newTop + 'px';
});
