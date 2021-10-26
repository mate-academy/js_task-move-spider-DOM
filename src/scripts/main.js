'use strict';

document.addEventListener('click', e => {
  // write code here
  const item = document.querySelector('.spider');
  const itemRect = item.getBoundingClientRect();

  const field = document.querySelector('.wall');
  const fieldSyle = window.getComputedStyle(field);
  const fieldBorder = parseInt(fieldSyle.borderWidth);
  const fieldRect = field.getBoundingClientRect();

  const xMinValue = 0;
  const xMaxValue = field.clientWidth - itemRect.width;
  const yMinValue = 0;
  const yMaxValue = field.clientHeight - itemRect.height;

  if (e.clientX > fieldRect.left && e.clientX < fieldRect.right
    && e.clientY > fieldRect.top && e.clientY < fieldRect.bottom) {
    let x = e.clientX - fieldRect.left - fieldBorder - itemRect.width / 2;
    let y = e.clientY - fieldRect.top - fieldBorder - itemRect.height / 2;

    if (x > xMaxValue) {
      x = xMaxValue;
    }

    if (x < xMinValue) {
      x = xMinValue;
    }

    if (y < yMinValue) {
      y = yMinValue;
    }

    if (y > yMaxValue) {
      y = yMaxValue;
    }

    item.style.top = `${y}px`;
    item.style.left = `${x}px`;
    // item.style.transform = `translate(50%, 50%)`;
  }
});
