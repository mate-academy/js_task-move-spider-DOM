'use strict';

class Shape {
  constructor(element) {
    this.element = element;
    this.compStyles = getComputedStyle(this.element);
    this.rect = this.element.getBoundingClientRect();
  };

  get height() {
    return this.rect.bottom - this.rect.top;
  }

  get width() {
    return this.rect.right - this.rect.left;
  }

  get top() {
    return this.rect.top + window.pageYOffset;
  }

  get bottom() {
    return this.rect.bottom + window.pageYOffset;
  }

  get right() {
    return this.rect.right + window.pageXOffset;
  }

  get left() {
    return this.rect.left + window.pageXOffset;
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

  setEdges(x, y) {
    this.centerX = x;
    this.centerY = y;

    this.edges = {};
    this.edges.left = this.centerX - (this.right - this.left) / 2;
    this.edges.right = this.centerX + (this.right - this.left) / 2;
    this.edges.top = this.centerY - (this.bottom - this.top) / 2;
    this.edges.bottom = this.centerY + (this.bottom - this.top) / 2;
  }

  moveTo(clientX, clientY) {
    this.setEdges(clientX, clientY);

    let newLeft = `${this.edges.left - this.surface.left}px`;
    let newTop = `${this.edges.top - this.surface.top}px`;

    if (this.edges.left < this.surface.left) {
      newLeft = '0px';
    } else if (this.edges.right > this.surface.right) {
      newLeft = `${this.surface.width - this.width}px`;
    }

    if (this.edges.top < this.surface.top) {
      newTop = '0px';
    } else if (this.edges.bottom > this.surface.bottom) {
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
