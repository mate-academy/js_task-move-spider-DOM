'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  if (e.target === wall || e.target === spider) {
    const wallClickX = e.clientX - wall.offsetLeft - wall.clientLeft;
    const wallClickY = e.clientY - wall.offsetTop - wall.clientTop;
    let spiderX = spider.x - wall.offsetLeft - wall.clientLeft;
    let spiderY = spider.y - wall.offsetTop - wall.clientTop;

    if (
      (wallClickX >= 0 && wallClickX <= wall.clientWidth)
      && (wallClickY >= 0 && wallClickY <= wall.clientHeight)
    ) {
      if (wallClickX <= 25) {
        spiderX = 0 - spiderX;
      } else if (wallClickX >= wall.clientWidth - 25) {
        spiderX = wall.clientWidth - 50 - spiderX;
      } else {
        spiderX = wallClickX - 25 - spiderX;
      }

      if (wallClickY <= 25) {
        spiderY = 0 - spiderY;
      } else if (wallClickY >= wall.clientHeight - 25) {
        spiderY = wall.clientHeight - 50 - spiderY;
      } else {
        spiderY = wallClickY - 25 - spiderY;
      }

      spider.style.transform = `translate(${spiderX}px, ${spiderY}px)`;
    };
  };
});
