'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';

  // console.log(spider.getBoundingClientRect());

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  // console.log(wallRect);
  // console.log(e.clientX);
  // console.log(e.clientY);
  // console.log(e.offsetX);

  // if (
  //   e.clientX < wallRect.left ||
  //   e.clientX > wallRect.right ||
  //   e.clientY < wallRect.top ||
  //   e.clientY > wallRect.bottom
  // ) {
  //   return;
  // }

  if (wall.contains(e.target)) {
    let newX = e.offsetX - spiderRect.width / 2;
    let newY = e.offsetY - spiderRect.width / 2;

    if (e.offsetX < spiderRect.width / 2) {
      newX = 0;
    } else if (e.offsetX > wallRect.width - spiderRect.width) {
      newX = wallRect.width - spiderRect.width;
    }

    if (e.offsetY < spiderRect.height / 2) {
      newY = 0;
    } else if (e.offsetY > wallRect.height - spiderRect.height) {
      newY = wallRect.height - spiderRect.height;
    }

    // console.log(newX);
    // console.log(newX);

    spider.style.position = 'absolute';
    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  }
});
