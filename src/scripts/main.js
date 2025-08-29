'use strict';

document.addEventListener('click', (e) => {
  const box = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const clickX = e.clientX;
  const clickY = e.clientY;
  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;
  const rect = box.getBoundingClientRect();
  let spiderCoordsY = Math.round(clickY - rect.top - spiderHeight / 2);
  let spiderCoordsX = Math.round(clickX - rect.left - spiderWidth / 2);

  if (spiderCoordsY < 0) {
    spiderCoordsY = 0;
  }

  if (spiderCoordsY > box.offsetHeight - spiderHeight) {
    spiderCoordsY = box.offsetHeight - spiderHeight;
  }

  if (spiderCoordsX < 0) {
    spiderCoordsX = 0;
  }

  if (spiderCoordsX > box.offsetWidth - spiderWidth) {
    spiderCoordsX = box.offsetWidth - spiderWidth;
  }

  if (e.target.closest('.wall')) {
    spider.style.top = spiderCoordsY + 'px';
    spider.style.left = spiderCoordsX + 'px';
  }
});
