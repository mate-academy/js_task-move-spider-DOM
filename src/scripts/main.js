'use strict';

const spider = document.querySelector('.spider');
const container = spider.parentElement;

const spiderRect = spider.getBoundingClientRect();

document.addEventListener('click', (e) => {
  if (e.target === container) {
    const clientX = e.clientX;
    const clientY = e.clientY;

    setPosition(spider, spiderRect.x, container, 'x', clientX);
    setPosition(spider, spiderRect.y, container, 'y', clientY);
  }
});

function setPosition(elem, elemStart, wrapper, direction, position) {
  const elemSize = direction === 'x' ? elem.offsetWidth : elem.offsetHeight;
  const wrapperSize =
    direction === 'x' ? wrapper.clientWidth : wrapper.clientHeight;

  const posProp = direction === 'x' ? 'left' : 'top';

  if (position < elemStart + elemSize / 2) {
    elem.style[posProp] = 0;

    return;
  }

  if (position > elemStart + wrapperSize - elemSize) {
    elem.style[posProp] = `${wrapperSize - elemSize}px`;

    return;
  }

  elem.style[posProp] = `${position - elemStart - elemSize / 2}px`;
}
