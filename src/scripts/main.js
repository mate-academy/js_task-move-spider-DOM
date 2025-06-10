'use strict';

document.addEventListener('DOMContentLoaded', ()  => {
  const wall= document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  wall.style.position = 'relative';
  spider.style.position = 'absolute';
  
  wall.addEventListener('click', (e) => {
    const wallMeasurements = wall.getBoundingClientRect();

    if (e.clientX < wallMeasurements.left ||
      e.clientX > wallMeasurements.right ||
      e.clientY < wallMeasurements.top ||
      e.clientY > wallMeasurements.bottom
    ) {
      return;
    }

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    let coordXRelativeToWall = e.clientX - wallMeasurements.left;
    let coordYRelativeToWall = e.clientY - wallMeasurements.top;

    let desiredTop = coordYRelativeToWall - spiderHeight / 2;
    let desiredLeft = coordXRelativeToWall - spiderWidth / 2;

    const maxTop = wallMeasurements.height - spiderHeight;
    const maxLeft = wallMeasurements.width - spiderWidth;

    const finalTop = Math.max(0, Math.min(desiredTop, maxTop));
    const finalLeft = Math.max(0, Math.min(desiredLeft, maxLeft));

    spider.style.top = finalTop + 'px';
    spider.style.left = finalLeft + 'px';
  })

  

});
