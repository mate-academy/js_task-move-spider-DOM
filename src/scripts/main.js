'use strict';

document.addEventListener('click', (e) => {
  const refs = {
    wall: document.querySelector('.wall'),
    spider: document.querySelector('.spider'),
  };

  const wallCoords = refs.wall.getBoundingClientRect();

  if (
    e.clientX < wallCoords.left ||
    e.clientX > wallCoords.right ||
    e.clientY < wallCoords.top ||
    e.clientY > wallCoords.bottom
  ) {
    return;
  }

  const spiderCoords = {
    top:
      e.clientY -
      wallCoords.top -
      refs.wall.clientTop -
      refs.spider.clientHeight / 2,

    left:
      e.clientX -
      wallCoords.left -
      refs.wall.clientLeft -
      refs.spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + refs.spider.clientWidth > refs.wall.clientWidth) {
    spiderCoords.left = refs.wall.clientWidth - refs.spider.clientWidth;
  }

  if (spiderCoords.top + refs.spider.clientHeight > refs.wall.clientHeight) {
    spiderCoords.top = refs.wall.clientHeight - refs.spider.clientHeight;
  }

  refs.spider.style.left = spiderCoords.left + 'px';
  refs.spider.style.top = spiderCoords.top + 'px';
});
