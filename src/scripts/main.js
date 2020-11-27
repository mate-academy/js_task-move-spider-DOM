'use strict';

class Spider {
  constructor() {
    this.spider = document.querySelector('.spider');
    this.wall = document.querySelector('.wall');

    this.wall.addEventListener('click', this.clickEventHandler.bind(this));
  }

  clickEventHandler(e) {
    let x = event.offsetX - this.spider.offsetWidth / 2;
    let y = event.offsetY - this.spider.offsetHeight / 2;

    const xMax = this.wall.clientWidth - this.spider.offsetWidth;
    const yMax = this.wall.clientHeight - this.spider.offsetHeight;

    if (x < 0) {
      x = 0;
    }

    if (x > xMax) {
      x = xMax;
    }

    if (y < 0) {
      y = 0;
    }

    if (y > yMax) {
      y = yMax;
    }
    this.spider.style.top = `${y}px`;
    this.spider.style.left = `${x}px`;
  }
}

const init = new Spider();

init();
