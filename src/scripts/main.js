'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  let spiderX = e.offsetX - (spider.height / 2);
  let spiderY = e.offsetY - (spider.width / 2);

  if (!e.target.closest('.wall')) {
    return;
  };

  if (spiderX < 0) {
    spiderX = 0;
  };

  if (spiderY < 0) {
    spiderY = 0;
  };

  if (spiderX > wall.clientHeight - spider.height) {
    spiderX = wall.clientHeight - spider.height;
  };

  if (spiderY > wall.clientWidth - spider.width) {
    spiderY = wall.clientWidth - spider.width;
  };

  spider.style = `top:${spiderY}px; left: ${spiderX}px;`;
});
