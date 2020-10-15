'use strict';

const wallItem = document.querySelector('.wall');
const wallItemHeight = wallItem.clientHeight;
const wallItemWidth = wallItem.clientWidth;
const spiderItem = document.querySelector('.spider');
const spiderHalfSize = spiderItem.width / 2;
const spiderRightShift = wallItem.offsetLeft + wallItem.clientLeft;
const spiderBottomShift = wallItem.offsetTop + wallItem.clientTop;

document.addEventListener('click', event => {
  if (event.target.classList.contains('wall')) {
    let spiderLeftShift = event.clientX - spiderRightShift - spiderHalfSize;
    let spiderTopShift = event.clientY - spiderBottomShift - spiderHalfSize;

    if (spiderLeftShift < 0) {
      spiderLeftShift = 0;
    }

    if (spiderLeftShift > wallItemWidth - spiderHalfSize * 2) {
      spiderLeftShift = wallItemWidth - spiderHalfSize * 2;
    }

    if (spiderTopShift < 0) {
      spiderTopShift = 0;
    }

    if (spiderTopShift > wallItemHeight - spiderItem.offsetHeight) {
      spiderTopShift = wallItemHeight - spiderItem.offsetHeight;
    };

    spiderItem.style.transform = `
      translate(${spiderLeftShift}px, ${spiderTopShift}px)
    `;
  }
});
