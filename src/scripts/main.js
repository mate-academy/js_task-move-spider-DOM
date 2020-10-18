'use strict';

const wallItem = document.querySelector('.wall');
const spiderItem = document.querySelector('.spider');

wallItem.addEventListener('click', event => {
  const wallItemHeight = wallItem.clientHeight;
  const wallItemWidth = wallItem.clientWidth;
  const spiderHalfSize = spiderItem.width / 2;
  const spiderRightShift = wallItem.offsetLeft + wallItem.clientLeft;
  const spiderBottomShift = wallItem.offsetTop + wallItem.clientTop;
  let spiderLeftShift = event.clientX - spiderRightShift - spiderHalfSize;
  let spiderTopShift = event.clientY - spiderBottomShift - spiderHalfSize;

  if (spiderLeftShift < 0) {
    spiderLeftShift = 0;
  }

  if (spiderLeftShift > wallItemWidth - spiderItem.width) {
    spiderLeftShift = wallItemWidth - spiderItem.width;
  }

  if (spiderTopShift < 0) {
    spiderTopShift = 0;
  }

  if (spiderTopShift > wallItemHeight - spiderItem.height) {
    spiderTopShift = wallItemHeight - spiderItem.height;
  };

  spiderItem.style.transform = `
    translate(${spiderLeftShift}px, ${spiderTopShift}px)
  `;
});
