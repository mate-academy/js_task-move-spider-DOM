'use strict';

const spider = document.querySelector('.spider');
const spiderParent = spider.parentElement;

spiderParent.addEventListener('click', function(e) {
  const parentRect = spiderParent.getBoundingClientRect();

  const style = getComputedStyle(spiderParent);
  const borderLeftWidth = parseFloat(style.borderLeftWidth);
  const borderTopWidth = parseFloat(style.borderTopWidth);
  const borderRightWidth = parseFloat(style.borderRightWidth);
  const borderBottomWidth = parseFloat(style.borderBottomWidth);

  const maxLeft
    = parentRect.width
      - spider.offsetWidth
      - borderRightWidth
      - borderLeftWidth;

  const maxTop
  = parentRect.height
    - spider.offsetHeight
    - borderBottomWidth
    - borderTopWidth;

  let left
    = e.clientX - parentRect.left - borderLeftWidth - spider.offsetWidth / 2;
  let spiderTop
    = e.clientY - parentRect.top - borderTopWidth - spider.offsetHeight / 2;

  if (left < 0) {
    left = 0;
  };

  if (spiderTop < 0) {
    spiderTop = 0;
  };

  if (left > maxLeft) {
    left = maxLeft;
  };

  if (spiderTop > maxTop) {
    spiderTop = maxTop;
  };

  spider.style.left = `${left}px`;
  spider.style.top = `${spiderTop}px`;
});
