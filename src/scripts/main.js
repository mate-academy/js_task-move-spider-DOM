'use strict';

// document.addEventListener('click', (e) => {
//   // write code here
// });

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const target = e.target;

  // console.log(spider.offsetParent);
  // console.log(spider.offsetLeft);
  // console.log(spider.offsetTop);
  // console.log(wall.offsetParent);

  if (wall === target) {
    // console.log('Click on wall');

    const clickX = e.clientX;
    const clickY = e.clientY;

    const wallPos = wall.getBoundingClientRect();

    spider.style.left =
      clickX - wallPos.x - wall.clientLeft - spider.width / 2 + 'px';

    if (clickX <= wallPos.left + wall.clientLeft + spider.width / 2) {
      spider.style.left = 0;
      // spider.style.left = 0 + 'px';
    }

    if (clickX >= wallPos.right - wall.clientLeft - spider.width / 2) {
      spider.style.left =
        wallPos.width - 2 * wall.clientLeft - spider.width + 'px';
    }

    spider.style.top =
      clickY - wallPos.y - wall.clientTop - spider.width / 2 + 'px';

    if (clickY <= wallPos.top + wall.clientTop + spider.width / 2) {
      spider.style.top = 0;
      // spider.style.top = 0 + 'px';
    }

    if (clickY >= wallPos.bottom - wall.clientTop - spider.width / 2) {
      spider.style.top =
        wallPos.width - 2 * wall.clientTop - spider.width + 'px';
    }
  }
});
