'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

document.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const spiderHeight = spider.clientHeight;
  const spiderWidht = spider.clientWidth;

  let requiredTop = e.clientY - wall.offsetTop - wall.clientTop - (spiderHeight / 2);
  let requiredLeft = e.clientX - wall.offsetLeft - wall.clientLeft - (spiderWidht / 2); 

  if (requiredTop < 0) {
    requiredTop = 0;
  }

  if (requiredTop > wall.clientHeight - spiderHeight) {
    requiredTop = wall.clientHeight- spiderHeight
  }

  if (requiredLeft < 0) {
    requiredLeft = 0;
  }

  if (requiredLeft > wall.clientWidth - spiderWidht) {
    requiredLeft = wall.clientWidth - spiderWidht;
  }

  spider.style.top = `${requiredTop}px`
  spider.style.left = `${requiredLeft}px`
  
});
