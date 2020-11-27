'use strict';

initSpider(document.querySelector('.wall'));

function initSpider(container) {
  const containerCoords = container.getBoundingClientRect();
  const containerTop = containerCoords.top - container.clientTop;
  const containerLeft = containerCoords.left - container.clientLeft;
  const containerHeigth = container.clientHeight;
  const containerWidth = container.clientWidth;

  const spider = container.querySelector('.spider');
  const spiderHeight = spider.clientHeight;
  const spiderWidth = spider.clientWidth;
  const spiderCoords = {};

  document.addEventListener('click', movingSpider);

  function movingSpider(e) {
    if (!e.target.closest('.wall')) {
      return;
    }

    calculateSpiderCoords(e);
    collisions(spiderCoords);

    spider.style.left = spiderCoords.left + 'px';
    spider.style.top = spiderCoords.top + 'px';
  }

  function calculateSpiderCoords(e) {
    spiderCoords.top = e.clientY - containerTop - spiderHeight / 2;
    spiderCoords.left = e.clientX - containerLeft - spiderWidth / 2;
  }

  function collisions(coords) {
    if (coords.top < 0) {
      coords.top = 0;
    };

    if (coords.left < 0) {
      coords.left = 0;
    };

    if (coords.left + spiderWidth > containerWidth) {
      coords.left = containerWidth - spiderWidth;
    };

    if (coords.top + spiderHeight > containerHeigth) {
      coords.top = containerHeigth - spiderHeight;
    };
  }
}
