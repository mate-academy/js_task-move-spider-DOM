'use strict';

document.addEventListener('click', e => {
  const wall = document.querySelector('.wall');

  if (e.target !== wall) {
    return;
  }

  const wallCoords = {
    x: wall.offsetLeft + wall.clientLeft,
    y: wall.offsetTop + wall.clientTop,
  };
  const spider = wall.querySelector('.spider');
  const spiderOffset = {
    x: 0,
    y: 0,

    set left(value) {
      this.x = value - wallCoords.x - this.width / 2;
    },

    set top(value) {
      this.y = value - wallCoords.y - this.height / 2;
    },

    get left() {
      if (this.x < 0) {
        this.x = 0;
      }

      if (this.x > wall.clientWidth - this.width) {
        this.x = wall.clientWidth - this.width;
      }

      return this.x;
    },

    get top() {
      if (this.y < 0) {
        this.y = 0;
      }

      if (this.y > wall.clientHeight - this.height) {
        this.y = wall.clientHeight - this.height;
      }

      return this.y;
    },

    get width() {
      return spider.clientWidth;
    },

    get height() {
      return spider.clientHeight;
    },
  };

  spiderOffset.left = e.clientX + window.scrollX;
  spiderOffset.top = e.clientY + window.scrollY;

  spider.style.left = `${spiderOffset.left}px`;
  spider.style.top = `${spiderOffset.top}px`;
});
