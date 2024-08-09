'use strict';

document.addEventListener('click', (e) => {
  let spider = document.querySelector('.spider')
  let wall = document.querySelector('.wall')

  if(e.target !== wall){
    return;
  }

  let wallWidth = wall.clientWidth
  let wallHeight = wall.clientHeight
  let spiderWidth = spider.clientWidth
  let spiderHeight = spider.clientHeight


  let x = e.offsetX - spiderWidth / 2
  let y = e.offsetY - spiderHeight / 2

  x = Math.max(0, Math.min(x, wallWidth - spiderWidth))
  y = Math.max(0, Math.min(y, wallHeight - spiderHeight))

  spider.style.left = x + 'px'
  spider.style.top = y + 'px'
});