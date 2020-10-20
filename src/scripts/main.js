'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', event => {
  if (!event.target.closest('.wall')) {
    return;
  }

  moveSomeObject(event, spider);
});

function moveSomeObject(event, someObject) {
  if (event.offsetX <= someObject.offsetWidth / 2) {
    someObject.style.left = '0px';
  } else if (event.offsetX >= wall.clientWidth - someObject.offsetWidth / 2) {
    someObject.style.left = `${wall.clientWidth - someObject.offsetWidth}px`;
  } else {
    someObject.style.left = `${event.offsetX - someObject.offsetWidth / 2}px`;
  }

  if (event.offsetY <= someObject.offsetHeight / 2) {
    someObject.style.top = '0px';
  } else if (event.offsetY >= wall.clientHeight - someObject.offsetHeight / 2) {
    someObject.style.top = `${wall.clientHeight - someObject.offsetHeight}px`;
  } else {
    someObject.style.top = `${event.offsetY - someObject.offsetHeight / 2}px`;
  }
}
