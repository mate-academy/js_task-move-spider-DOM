'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target !== wall) {
    return;
  }
  moveElement(e.clientX, e.clientY, wall, spider);
});

function moveElement(X, Y, box, element) {
  const maxTop = box.clientHeight - element.clientHeight;
  const maxLeft = box.clientWidth - element.clientWidth;

  element.style.left = `${X - box.offsetLeft
    - element.clientWidth / 2 - box.clientLeft}px`;

  element.style.top = `${Y - box.offsetTop
    - element.clientHeight / 2 - box.clientTop}px`;

  if (parseFloat(element.style.left) < 0) {
    element.style.left = 0;
  }

  if (parseFloat(element.style.top) < 0) {
    element.style.top = 0;
  }

  if (parseFloat(element.style.left) > maxLeft) {
    element.style.left = `${maxLeft}px`;
  }

  if (parseFloat(element.style.top) > maxTop) {
    element.style.top = `${maxTop}px`;
  }
}
