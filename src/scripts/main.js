'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallWidth = parseInt(window.getComputedStyle(wall).width);
  const wallHeight = parseInt(window.getComputedStyle(wall).height);

  if (e.target.matches('.wall')) {
    const x = e.clientX - wall.offsetLeft - spider.clientWidth / 2;
    const y = e.clientY - wall.offsetTop - spider.clientHeight / 2;

    const newX = Math.max(0, Math.min(x, wallWidth - spider.clientWidth));
    const newY = Math.max(0, Math.min(y, wallHeight - spider.clientHeight));

    spider.style.left = `${newX}px`;
    spider.style.top = `${newY}px`;
  }
});
