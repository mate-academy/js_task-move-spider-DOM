'use strict';

class Shape {
  constructor(element) {
    this.element = element;
    this.compStyles = getComputedStyle(this.element);
    this.clientRect = this.element.getBoundingClientRect();
  };

  get height() {
    return this.clientRect.bottom - this.clientRect.top;
  }

  get width() {
    return this.clientRect.right - this.clientRect.left;
  }

  get top() {
    return this.clientRect.top + window.pageYOffset;
  }

  get bottom() {
    return this.clientRect.bottom + window.pageYOffset;
  }

  get right() {
    return this.clientRect.right + window.pageXOffset;
  }

  get left() {
    return this.clientRect.left + window.pageXOffset;
  }
}

class Wall extends Shape {
  get borderSize() {
    return Number.parseInt(this.compStyles.borderTopWidth);
    // return 0;
  }

  get height() {
    return super.height - this.borderSize * 2;
  }

  get width() {
    return super.width - this.borderSize * 2;
  }

  get top() {
    return super.top + this.borderSize;
  }

  get bottom() {
    return super.bottom - this.borderSize;
  }

  get right() {
    return super.right - this.borderSize;
  }

  get left() {
    return super.left + this.borderSize;
  }

  containPoint(x, y) {
    return (this.super.left < x && x < this.super.right
      && this.super.top < y && y < this.super.bottom);
  }
}

class Spider extends Shape {
  constructor(element, surface) {
    super(element);
    this.surface = surface;
  }

  getNewCoords(x, y) {
    return {
      left: x - (this.width) / 2,
      right: x + (this.width) / 2,
      top: y - (this.height) / 2,
      bottom: y + (this.height) / 2,
    };
  }

  moveTo(clientX, clientY) {
    const newCoords = this.getNewCoords(clientX, clientY);

    let newLeft = `${newCoords.left - this.surface.left}px`;
    let newTop = `${newCoords.top - this.surface.top}px`;

    if (newCoords.left < this.surface.left) {
      newLeft = '0px';
    } else if (newCoords.right > this.surface.right) {
      newLeft = `${this.surface.width - this.width}px`;
    }

    if (newCoords.top < this.surface.top) {
      newTop = '0px';
    } else if (newCoords.bottom > this.surface.bottom) {
      newTop = `${this.surface.height - this.height}px`;
    }

    this.element.style.left = newLeft;
    this.element.style.top = newTop;
  }
}

document.querySelector('.wall').addEventListener('click', e => {
  const wall = new Wall(document.querySelector('.wall'));
  const spider = new Spider(document.querySelector('.spider'), wall);

  spider.element.style['background-color'] = 'pink';

  spider.moveTo(e.clientX, e.clientY);
});
