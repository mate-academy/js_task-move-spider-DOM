'use strict';

const spiderElement = document.querySelector('.spider');

document.addEventListener('click', (e) => {
  // write code here
  e.preventDefault();

  const wall = e.target.closest('.wall');
  const wallCords = wall.getBoundingClientRect();

  if (!wall) {
    return;
  }

  const newTop = Math.max(
    e.clientY - wallCords.top - wall.clientTop - spiderElement.clientHeight / 2,
    0,
  );

  const newLeft = Math.max(
    e.clientX -
      wallCords.left -
      wall.clientLeft -
      spiderElement.clientWidth / 2,
    0,
  );

  spiderElement.style.top = `${newTop}px`;
  spiderElement.style.left = `${newLeft}px`;
});
