'use strict';

document.addEventListener('click', e => {
  // write code here
  const wallHeight = document.querySelector('.wall').clientHeight;
  const wallWidth = document.querySelector('.wall').clientWidth;

  const spider = document.querySelector('.spider');
  const spiderHeigth = spider.clientHeight;
  const spiderWidth = spider.clientWidth;

  if (!e.target.classList.contains('wall')) {
    return;
  }

  let coordsX = `${e.offsetX - spiderWidth / 2}px`;
  let coordsY = `${e.offsetY - spiderHeigth / 2}px`;

  if (e.offsetY < spiderHeigth / 2) {
    coordsY = 0;
  }

  if (e.offsetY > (wallHeight - spiderHeigth)) {
    coordsY = `${wallHeight - spiderHeigth}px`;
  }

  if (e.offsetX < spiderWidth / 2) {
    coordsX = 0;
  }

  if (e.offsetX > (wallWidth - spiderWidth)) {
    coordsX = `${wallWidth - spiderWidth}px`;
  }

  spider.style.left = coordsX;
  spider.style.top = coordsY;
});
