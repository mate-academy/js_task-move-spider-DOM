'use strict';

document.addEventListener('click', e => {
  const spider = document.getElementsByClassName('spider')[0];
  const wall = document.getElementsByClassName('wall')[0];

  if (e.target === wall) {
    spider.style.top = cage(e.offsetY, spider, wall) + 'px';
    spider.style.left = cage(e.offsetX, spider, wall) + 'px';
    spider.style.transform = 'translate(-50%, -50%)';
  }
});

function cage(coordProp, elem, fieldCage) {
  if ((coordProp - elem.clientHeight / 2) <= 0) {
    return elem.clientHeight / 2;
  }

  if ((coordProp - fieldCage.clientHeight) >= 0) {
    return fieldCage.clientHeight - elem.clientHeight / 2;
  }

  return coordProp;
};
