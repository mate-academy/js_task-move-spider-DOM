'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  if (wall.contains(e.target)) {
    spider.style.top = `${
      e.offsetY < 25 ? 0 : e.offsetY > 350 ? 350 : e.offsetY - 25
    }px`;

    spider.style.left = `${
      e.offsetX < 25 ? 0 : e.offsetX > 350 ? 350 : e.offsetX - 25
    }px`;
  }
});
