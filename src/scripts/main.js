'use strict';

let mousePos = {
  x: undefined, y: undefined,
};

document.addEventListener('click', e => {
  const wall = e.target;

  if (wall.classList.contains('wall')) {
    const spider = document.querySelector('.spider');
    const spiderSize = getComputedStyle(spider).width;

    mousePos = {
      x: e.layerX, y: e.layerY,
    };

    spider.style.transform = `translateY(
      ${mousePos.y - parseInt(spiderSize) - 10}px)
      translateX(${mousePos.x - parseInt(spiderSize) - 10}px)`;

    console.log(`translateY(
      ${mousePos.y - parseInt(spiderSize) / 2}px)
      translateX(${mousePos.x - parseInt(spiderSize) / 2}px)`);
  }
});
