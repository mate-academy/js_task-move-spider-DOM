'use strict';

document.addEventListener('click', relocateSpider);

function relocateSpider(evnt) {
  if (!evnt.target.closest('.wall')) {
    return;
  }

  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const clickPosX = evnt.offsetX;
  const clickPosY = evnt.offsetY;

  let spiderLeft = clickPosX - spider.offsetWidth / 2;
  let spiderTop = clickPosY - spider.offsetHeight / 2;

  if (clickPosY <= spider.offsetHeight / 2) {
    spiderTop = 0;
  } else if (clickPosY >= wall.clientHeight - spider.offsetHeight / 2) {
    spiderTop = wall.clientHeight - spider.offsetHeight;
  }

  if (clickPosX <= spider.offsetWidth / 2) {
    spiderLeft = 0;
  } else if (clickPosX >= wall.clientWidth - spider.offsetWidth / 2) {
    spiderLeft = wall.clientWidth - spider.offsetWidth;
  }

  spider.style.top = `${spiderTop}px`;
  spider.style.left = `${spiderLeft}px`;
}
