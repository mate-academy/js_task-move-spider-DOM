'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');
// we create values from elements before point
// when we set handler and use those as we need

document.addEventListener('click', (e) => {
  const field = e.target.closest('.wall');

  if (!field) {
    return; // we get rid of options when "click" happens outside the wall
  }

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();
  const widthSpider = spider.offsetWidth; // the spider is square
  const border = wall.clientTop;

  let x = e.clientX - widthSpider / 2 - border - wallRect.left;
  let y = e.clientY - widthSpider / 2 - border - wallRect.top;

  // here we math how many 'px' the spider need to move on
  // the wall in vertical and horizontal parameters relative himself.
  // From coordinates of "click" we subtract half width spider,
  // border of wall, position wall in our window and
  // get a numbers those we need

  x = Math.max(0, Math.min(x, wall.clientWidth - spiderRect.width));
  y = Math.max(0, Math.min(y, wall.clientHeight - spiderRect.height));

  // the spider can't move out of the wall. Also can't move on border.
  // It was can happend if our 'x' and 'y' get less zero or more
  // than the length of the wall

  spider.style.left = x + 'px'; // we set position our spider
  spider.style.top = y + 'px'; // relative to the upper left corner
});
