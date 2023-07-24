'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const vertical = e.clientY - wall.offsetTop;
  const horizontal = e.clientX - wall.offsetLeft;

  function boundry(direction) {
    if (direction > 385) {
      return 385;
    } else if (direction < 35) {
      return 35;
    }

    return direction;
  }

  const vert = boundry(vertical);
  const hori = boundry(horizontal);

  if (wall.contains(e.target)) {
    spider.style.top = vert + 'px';
    spider.style.left = hori + 'px';
    spider.style.transform = 'translate(-70%, -70%)';
  }
});
