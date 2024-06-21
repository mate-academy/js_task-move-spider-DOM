'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    // click X pos - wall left padding - wall left border - spider width / 2
    let coordX =
      e.clientX - wallRect.left - wall.clientLeft - spider.clientWidth / 2;

    // click Y pos - wall top padding - wall top border - spider heigth / 2
    let coordY =
      e.clientY - wallRect.top - wall.clientTop - spider.clientHeight / 2;

    if (coordX < 0) {
      coordX = 0;
    }

    if (coordY < 0) {
      coordY = 0;
    }

    // is spider is not outside of the rigth boundry
    if (wall.clientWidth < spider.clientWidth + coordX) {
      coordX = wall.clientWidth - spider.clientWidth;
    }

    // is spider is not outside of the bottom boundry
    if (wall.clientHeight < spider.clientHeight + coordY) {
      coordY = wall.clientHeight - spider.clientHeight;
    }

    spider.style.top = `${coordY}px`;
    spider.style.left = `${coordX}px`;
  }
});
