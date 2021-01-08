'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSizeX = spider.clientWidth;
const spiderSizeY = spider.clientHeight;
const wallSizeX = wall.clientWidth;
const wallSizeY = wall.clientHeight;
const halfXSpider = spiderSizeX / 2;
const halfYSpider = spiderSizeY / 2;

function spiderGoLeft() {
  spider.style.left = '0px';
}

function spiderGoRight() {
  spider.style.left = `${wallSizeX - spiderSizeX}px`;
}

function spiderGoTop() {
  spider.style.top = '0px';
}

function spiderGoBottom() {
  spider.style.top = `${wallSizeY - spiderSizeY}px`;
}

wall.addEventListener('click', (evnt) => {
  if (evnt.target === spider) {
    if ((halfXSpider - evnt.offsetX) > spider.offsetLeft) {
      spiderGoLeft();
    } else if (evnt.offsetX
      > wallSizeX - spider.offsetLeft - halfXSpider) {
      spiderGoRight();
    } else {
      spider.style.left = `${spider.offsetLeft
        - (halfXSpider - evnt.offsetX)}px`;
    }
  }

  if (evnt.target === wall) {
    if (evnt.offsetX < spiderSizeX) {
      spiderGoLeft();
    } else if (wall.offsetWidth - evnt.offsetX < spiderSizeX) {
      spiderGoRight();
    } else {
      spider.style.left = `${evnt.offsetX - halfXSpider}px`;
    }
  }

  if (evnt.target === spider) {
    if ((spiderSizeY / 2 - evnt.offsetY) > spider.offsetTop) {
      spiderGoTop();
    } else if (evnt.offsetY
      > wallSizeY - spider.offsetTop - halfYSpider) {
      spiderGoBottom();
    } else {
      spider.style.top = `${spider.offsetTop
        - (spiderSizeY / 2 - evnt.offsetY)}px`;
    }
  }

  if (evnt.target === wall) {
    if (evnt.offsetY < spiderSizeY) {
      spiderGoTop();
    } else if (wall.offsetHeight - evnt.offsetY < spiderSizeY) {
      spiderGoBottom();
    } else {
      spider.style.top = `${evnt.offsetY - halfYSpider}px`;
    }
  }
});
