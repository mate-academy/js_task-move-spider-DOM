'use strict';

const spider = document.querySelector('.spider');
const parentBlock = spider.offsetParent;

let width = 0;
let height = 0;

const differenceWidth =
  (document.querySelector('body').clientWidth - parentBlock.clientWidth) / 2;
const differenceHeight =
  (document.querySelector('body').clientHeight - parentBlock.clientHeight) / 2;

function getParam(param, max) {
  if (param < 0) {
    return 0;
  }

  if (param > max) {
    return max;
  }

  return param;
}

parentBlock.addEventListener('click', (e) => {
  width =
    e.clientX - differenceWidth - spider.getBoundingClientRect().width / 2;

  height =
    e.clientY - differenceHeight - spider.getBoundingClientRect().height / 2;

  spider.style.cssText = `position: absolute; 
    top: ${getParam(height, parentBlock.clientHeight - spider.clientHeight)}px; 
    left: ${getParam(width, parentBlock.clientWidth - spider.clientWidth)}px`;
});
