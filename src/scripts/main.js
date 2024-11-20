'use strict';

const wall = document.querySelector('.wall');
let spider = document.querySelector('.spider');

wall.addEventListener('click', (e) => {
  if (!spider) {
    spider = document.querySelector('.spider');

    if (!spider) {
      return;
    }
  }

  const x =
    e.clientX - wall.getBoundingClientRect().left - spider.offsetWidth / 2;
  const y =
    e.clientY - wall.getBoundingClientRect().top - spider.offsetHeight / 2;

  spider.style.transform = `translate(${x}px, ${y}px)`;
});
