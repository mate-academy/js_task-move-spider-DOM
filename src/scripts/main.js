'use strict';

const field = document.querySelector('.wall');
const spider = document.querySelector('.spider');

field.onclick = function(event) {
  const fieldCoords = this.getBoundingClientRect();

  const spiderCoords = {
    top: event.clientY - fieldCoords.top
    - field.clientTop - spider.clientHeight / 2,
    left: event.clientX - fieldCoords.left
    - field.clientLeft - spider.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  };

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  };

  if (spiderCoords.left + spider.clientWidth > field.clientWidth) {
    spiderCoords.left = field.clientWidth - spider.clientWidth;
  }

  // запрещаем пересекать нижнюю границу поля
  if (spiderCoords.top + spider.clientHeight > field.clientHeight) {
    spiderCoords.top = field.clientHeight - spider.clientHeight;
  }

  spider.style.left = spiderCoords.left + 'px';
  spider.style.top = spiderCoords.top + 'px';
};
