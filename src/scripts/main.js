'use strict';

document.addEventListener('click', e => {
  const spider = document.querySelector('.spider');
  const styleSpider = getComputedStyle(spider);

  const spiderHeight = parseFloat(styleSpider.height);
  const spiderWidth = parseFloat(styleSpider.width);

  const wall = document.querySelector('.wall');
  const wallBorder = (wall.offsetHeight - wall.clientHeight) / 2;

  const wallXstart = wall.getBoundingClientRect().x
  + wallBorder + spiderWidth / 2;
  const wallXend = wall.getBoundingClientRect().x
  + wall.getBoundingClientRect().width - wallBorder - spiderWidth / 2;
  const wallYstart = wall.getBoundingClientRect().y
  + wallBorder + spiderHeight / 2;
  const wallYend = wall.getBoundingClientRect().y
  + wall.getBoundingClientRect().height - wallBorder - spiderHeight / 2;

  if (e.clientX <= wallXend && e.clientX >= wallXstart
  && e.clientY <= wallYend && e.clientY >= wallYstart) {
    const spiderNewPosTop = e.clientY - wallYstart;
    const spiderNewPosLeft = e.clientX - wallXstart;

    spider.style.top = `${spiderNewPosTop}px`;
    spider.style.left = `${spiderNewPosLeft}px`;
  }
});
