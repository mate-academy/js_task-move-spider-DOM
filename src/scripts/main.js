'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

document.addEventListener('click', e => {
  const eventX = e.clientX;
  const eventY = e.clientY;

  const wallWidth = wall.clientWidth;
  const wallHeight = wall.clientHeight;
  const wallOffsetTop = wall.offsetTop;
  const wallOffsetLeft = wall.offsetLeft;
  const wallClientTop = wall.clientTop;
  const wallClientLeft = wall.clientLeft;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  function positionCalc(
    eventPosition,
    containerOffset,
    containerBorder,
    containerSideSize,
    innerObjectSIze
  ) {
    let objectPosition = eventPosition
      - containerOffset
      - containerBorder
      - innerObjectSIze / 2;

    if (objectPosition < 0) {
      objectPosition = 0;
    }

    if (objectPosition > containerSideSize - innerObjectSIze) {
      objectPosition = containerSideSize - innerObjectSIze;
    }

    return objectPosition;
  }

  const spiderTop = positionCalc(
    eventY,
    wallOffsetTop,
    wallClientTop,
    wallHeight,
    spiderHeight
  );

  const spiderLeft = positionCalc(
    eventX,
    wallOffsetLeft,
    wallClientLeft,
    wallWidth,
    spiderWidth
  );

  spider.style.top = `${spiderTop}px`;

  spider.style.left = `${spiderLeft}px`;
});
