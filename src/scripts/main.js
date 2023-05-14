'use strict';

document.addEventListener('click', e => {
  const block = document.querySelector('.wall');
  const picture = document.querySelector('.spider');

  const maxWidth = block.clientWidth - picture.clientWidth;
  const maxHeight = block.clientHeight - picture.clientHeight;

  if (!block.contains(e.target)) {
    return;
  }

  let pictureX = e.offsetX - (picture.clientWidth / 2);
  let pictureY = e.offsetY - (picture.clientHeight / 2);

  if (pictureX > maxWidth) {
    pictureX = maxWidth;
  }

  if (pictureY > maxHeight) {
    pictureY = maxHeight;
  }

  if (pictureX < 0) {
    pictureX = 0;
  }

  if (pictureY < 0) {
    pictureY = 0;
  }

  picture.style.top = `${pictureY}px`;
  picture.style.left = `${pictureX}px`;
});
