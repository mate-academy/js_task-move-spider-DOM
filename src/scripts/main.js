'use strict';

const spiderMan = document.querySelector('.spider');
const wallArea = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  if (e.target !== wallArea) {
    return;
  }

  const wallProp = wallArea.getBoundingClientRect();
  const spiderWidth = spiderMan.offsetWidth;
  const spiderHeight = spiderMan.offsetHeight;

  const wallStyle = getComputedStyle(wallArea);
  const borderWidth =
    parseInt(wallStyle.borderLeftWidth) + parseInt(wallStyle.borderRightWidth);

  const clickX = e.clientX - wallProp.left;
  const clickY = e.clientY - wallProp.top;

  let newLeft = clickX - spiderWidth / 2;
  let newTop = clickY - spiderHeight / 2;

  if (newLeft < borderWidth) {
    newLeft = borderWidth;
  } else if (newLeft > wallProp.width - spiderWidth - borderWidth) {
    newLeft = wallProp.width - spiderWidth - borderWidth;
  }

  if (newTop < borderWidth) {
    newTop = borderWidth;
  } else if (newTop > wallProp.height - spiderHeight - borderWidth) {
    newTop = wallProp.height - spiderHeight - borderWidth;
  }

  spiderMan.style.top = newTop + 'px';
  spiderMan.style.left = newLeft + 'px';
  spiderMan.style.transform = 'translate(0, 0)';
});
