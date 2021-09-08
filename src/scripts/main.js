'use strict';

document.addEventListener('click', e => {
  const wall = e.target;

  const spider = document.querySelector('.spider');

  if (wall.classList.contains('wall')) {
    let topSpider;
    let leftSpider;

    const minCursorTop = parseFloat(getComputedStyle(wall).border);

    const minCursorBottom = parseFloat(getComputedStyle(wall).height)
      - (parseFloat(getComputedStyle(spider).height) / 2
      + parseFloat(getComputedStyle(wall).border));

    const minCursorLeft = parseFloat(getComputedStyle(wall).border);

    const minCursorRight = parseFloat(getComputedStyle(wall).width)
      - (parseFloat(getComputedStyle(spider).width) / 2
      + parseFloat(getComputedStyle(wall).border));

    if (e.offsetY <= minCursorTop) {
      topSpider
        = `${e.offsetY + parseFloat(getComputedStyle(wall).border)}px`;
    } else if (e.offsetY >= minCursorBottom) {
      topSpider
        = `${e.offsetY - parseFloat(getComputedStyle(spider).height)
        - parseFloat(getComputedStyle(wall).border)}px`;
    } else {
      topSpider
        = `${e.offsetY - (parseFloat(getComputedStyle(spider).height) / 2)}px`;
    }

    if (e.offsetX <= minCursorLeft) {
      leftSpider
        = `${e.offsetX + parseFloat(getComputedStyle(wall).border)}px`;
    } else if (e.offsetX >= minCursorRight) {
      leftSpider
        = `${e.offsetX - parseFloat(getComputedStyle(spider).width)
        - parseFloat(getComputedStyle(wall).border)}px`;
    } else {
      leftSpider
        = `${e.offsetX - (parseFloat(getComputedStyle(spider).width) / 2)}px`;
    }

    spider.style.top = topSpider;

    spider.style.left = leftSpider;
  }
});
