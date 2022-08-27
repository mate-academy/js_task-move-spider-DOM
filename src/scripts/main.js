'use strict';

document.addEventListener('click', e => {
  // write code here
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');
  const spiderH = parseFloat(getComputedStyle(spider).height) / 2;
  const spiderW = parseFloat(getComputedStyle(spider).width) / 2;
  const wallH = parseFloat(getComputedStyle(wall).height);
  const wallW = parseFloat(getComputedStyle(wall).width);
  const wallB = parseFloat(getComputedStyle(wall).border);
  const cursW = parseFloat(e.offsetX);
  const cursH = parseFloat(e.offsetY);

  if (e.target.closest('.wall')) {
    spider.style.top = cursH < (wallB + spiderH)
      ? '0px' : cursH > (wallH - spiderH)
        ? `${wallH - spiderH * 2}px` : `${cursH - spiderH}px`;

    spider.style.left = cursW < (wallB + spiderW)
      ? '0px' : cursW > (wallW - spiderW)
        ? `${wallW - spiderW * 2 }px` : `${cursW - spiderW}px`;
  }
});
