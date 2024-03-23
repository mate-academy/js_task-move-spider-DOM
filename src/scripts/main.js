'use strict';

document.addEventListener('click', (e) => {
  // write code here
  let wall = e.target;

  while (!wall.classList.contains('wall')) {
    wall = wall.parrentNode;

    if (!wall) {
      return;
    }
  }

  const spider = wall.querySelector('.spider');
  // wall content rect relative to viewport
  const { x: xPos, y: yPos } = wall.getBoundingClientRect();
  const wallRect = new Rect(
    xPos + wall.clientLeft,
    yPos + wall.clientTop,
    wall.clientWidth,
    wall.clientHeight,
  );

  // spider in new pos relative to viewport
  const spiderCenterX = spider.offsetWidth / 2;
  const spiderCenterY = spider.offsetHeight / 2;
  const newPosSpiderRect = new Rect(
    e.clientX - spiderCenterX,
    e.clientY - spiderCenterY,
    spider.offsetWidth,
    spider.offsetHeight,
  );

  /*
    both spider and wall has position relative to viewport
    moveInside makes sure spider is inside wall
    sePosRealtive to make spider position relative to the wall
  */
  newPosSpiderRect.moveInside(wallRect).setPosRelative(wallRect);

  spider.style.left = newPosSpiderRect.x + 'px';
  spider.style.top = newPosSpiderRect.y + 'px';
});

class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  /*
    sets position relative to anothher rect
    both rects position must be relative to the same point
  */
  setPosRelative(rect) {
    if (!(rect instanceof Rect)) {
      throw new Error('not a rectangele');
    }

    this.x -= rect.x;
    this.y -= rect.y;

    return this;
  }

  /*
    method places this rect on border of passed rect if any part of it is
    outside of passed rect
    both rects position must be relative to the same point
  */
  moveInside(rect) {
    if (this.x < rect.x) {
      this.x = rect.x;
    } else if (this.x + this.width > rect.x + rect.width) {
      this.x = rect.x + rect.width - this.width;
    }

    if (this.y < rect.y) {
      this.y = rect.y;
    } else if (this.y + this.height > rect.y + rect.height) {
      this.y = rect.y + rect.height - this.height;
    }

    return this;
  }
}
