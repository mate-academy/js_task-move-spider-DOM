'use strict';

document.addEventListener('click', e => {
  if (!e.target.classList.contains('wall')) {
    return false;
  }

  const widthOfPicture = e.target.width;
  const heightOfPicture = e.target.height;
  const centerOfPicture = widthOfPicture / 2;
  const spider = e.target.children[0];

  if (e.offsetX - centerOfPicture < 0) {
    if (e.offsetY - centerOfPicture < 0) {
      spider.style.cssText = `top: 0px; left: 0px;`;
    } else if (e.offsetY + centerOfPicture > e.target.clientHeight) {
      spider.style.cssText = `left: 0px;
         top: ${e.target.clientHeight - heightOfPicture}px;`;
    } else {
      spider.style.cssText = `left: 0px;
         top: ${e.offsetY - centerOfPicture}px;`;
    }
  } else if (e.offsetX + centerOfPicture > e.target.clientWidth) {
    if (e.offsetY - centerOfPicture < 0) {
      spider.style.cssText = `top: 0px; 
      left: ${e.target.clientWidth - widthOfPicture}px;`;
    } else if (e.offsetY + centerOfPicture > e.target.clientHeight) {
      spider.style.cssText = `left: ${e.target.clientWidth - widthOfPicture}px;
         top: ${e.target.clientHeight - heightOfPicture}px;`;
    } else {
      spider.style.cssText = `top: ${e.offsetY - centerOfPicture}px;
         left: ${e.target.clientWidth - widthOfPicture}px;`;
    }
  } else {
    if (e.offsetY - centerOfPicture < 0) {
      spider.style.cssText = `top: 0px; left: ${e.offsetX}px;`;
    } else if (e.offsetY + centerOfPicture > e.target.clientHeight) {
      if (e.offsetX - centerOfPicture < 0) {
        spider.style.cssText = `
          top: ${e.target.clientHeight - heightOfPicture}px;
          left: 0px;`;
      } else {
        spider.style.cssText = `
          top: ${e.target.clientHeight - heightOfPicture}px;
          left: ${e.offsetX}px;`;
      }
    } else {
      spider.style.cssText = `top: ${e.offsetY - centerOfPicture}px;
         left: ${e.offsetX - centerOfPicture}px;`;
    }
  }
});
