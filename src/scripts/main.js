'use strict';

document.addEventListener('click', (e) => {
  // write code here

  const field = e.target.closest('.wall');
  const character = document.querySelector('.spider');

  if (!field) {
    return;
  }

  const bounding = field.getBoundingClientRect();
  const positionX = e.clientX - bounding.left - character.clientWidth;
  const positionY = e.clientY - bounding.top - character.clientHeight;

  const maxWidth = field.clientWidth - character.clientWidth;
  const maxHeight = field.clientHeight - character.clientHeight;

  let currentPositionX = positionX <= 0 ? 0 : positionX;
  let currentPositionY = positionY <= 0 ? 0 : positionY;

  if (currentPositionX >= maxWidth) {
    currentPositionX = maxWidth;
  }

  if (currentPositionY >= maxHeight) {
    currentPositionY = maxHeight;
  }

  character.style.left = `${currentPositionX}px`;
  character.style.top = `${currentPositionY}px`;
});
