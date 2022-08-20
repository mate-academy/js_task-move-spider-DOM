'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderH = parseFloat(getComputedStyle(spider).height) / 2;
  const spiderW = parseFloat(getComputedStyle(spider).width) / 2;
  const wallH = getComputedStyle(wall).height;
  const wallW = getComputedStyle(wall).width;
  const wallB = getComputedStyle(wall).border;
  const cursW = e.offsetX;
  const cursH = e.offsetY;

  if (e.target.closest('.wall')) {
    if (parseFloat(cursH) < (parseFloat(wallB) + (parseFloat(spiderH)))) {
      spider.style.top = '0px';
    } else if (parseFloat(cursH) > ((parseFloat(wallH)) - parseFloat(
      spiderH))) {
      spider.style.top = `${parseFloat(wallH) - parseFloat(spiderH) * 2}px`;
    } else {
      spider.style.top = `${parseFloat(cursH) - parseFloat(spiderH)}px`;
    }

    if (parseFloat(cursW) < (parseFloat(wallB) + (parseFloat(spiderW)))) {
      spider.style.left = '0px';
    } else if (parseFloat(cursW) > ((parseFloat(wallW)) - parseFloat(
      spiderW))) {
      spider.style.left = `${parseFloat(wallW) - parseFloat(spiderW) * 2}px`;
    } else {
      spider.style.left = `${parseFloat(cursW) - parseFloat(spiderW)}px`;
    }
  }
});
