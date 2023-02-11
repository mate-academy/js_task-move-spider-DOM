'use strict';


let wall = document.querySelector('.wall')

let spider = document.querySelector('.spider')

let spiderStyle = window.getComputedStyle(spider)

document.addEventListener('click', (event) => {

  const coords = {
    x: event.offsetX - spider.clientWidth / 2,
    y: event.offsetY - spider.clientHeight / 2
  };

  if (event.target !== wall) {
    return
  }

  function getCorrds(coord, wallSize, spiderSize) {
    if ( coord < 0) {
      return 0;
    }
    if (coord > wallSize - spiderSize){
      return wallSize - spiderSize;
    }

    return coord;
  }

  coords.x = getCorrds(coords.x, wall.clientWidth, spider.clientWidth)
  coords.y = getCorrds(coords.y, wall.clientHeight, spider.clientHeight)

  spider.style.left = `${coords.x}px`;
  spider.style.top = `${coords.y}px`;

})

