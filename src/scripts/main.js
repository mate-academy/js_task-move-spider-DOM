'use strict';

const wall = {
  element: document.querySelector('.wall'),

  get height() {
    return this.element.clientHeight;
  },

  get width() {
    return this.element.clientWidth;
  },

  coords: { // координаты верхнего левого угла
    get x() {
      return wall.element
        .getClientRects()[0].x + window.pageXOffset + borderWidth;
    },

    get y() {
      return wall.element
        .getClientRects()[0].y + window.pageYOffset + borderWidth;
    },
  },
};

const spider = document.querySelector('.spider');
const spiderHeight = spider.clientHeight;
const spiderWidth = spider.clientWidth;

const borderWidth = parseFloat(
  window
    .getComputedStyle(wall.element)
    .borderWidth
);

wall.element.addEventListener('click', () => {
  spider.style.top = `${event.clientY
    - wall.coords.y
    - (spiderHeight / 2)
    + window.pageYOffset}px`;

  spider.style.left = `${event.clientX
    - wall.coords.x
    - (spiderWidth / 2)
    + window.pageXOffset}px`;

  if (parseFloat(spider.style.top) < 0) {
    spider.style.top = '0px';
  }

  if (parseFloat(spider.style.left) < 0) {
    spider.style.left = '0px';
  }

  if (parseFloat(spider.style.top) > wall.height - spiderHeight) {
    spider.style.top = `${wall.height - spiderHeight}px`;
  }

  if (parseFloat(spider.style.left) > wall.width - spiderWidth) {
    spider.style.left = `${wall.width - spiderWidth}px`;
  }
});
