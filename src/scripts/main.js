'use strict';

document.addEventListener('click', (e) => {
  const field = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (field.contains(e.target)) {
    const fieldCoords = field.getBoundingClientRect();

    const fieldStyles = window.getComputedStyle(field);
    const brdrWdt = parseFloat(fieldStyles.getPropertyValue('border-width'));

    const offsetX = e.clientX - fieldCoords.left - brdrWdt;
    const offsetY = e.clientY - fieldCoords.top - brdrWdt;

    const spiderWidth = spider.offsetWidth;
    const spiderHeight = spider.offsetHeight;

    const minSpiderLeft = 0;
    const maxSpiderLeft = fieldCoords.width - brdrWdt * 2 - spiderWidth;

    const minSpiderTop = 0;
    const maxSpiderTop = fieldCoords.height - brdrWdt * 2 - spiderHeight;

    let newSpiderLeft = offsetX - spiderWidth / 2;
    let newSpiderTop = offsetY - spiderHeight / 2;

    if (newSpiderLeft < minSpiderLeft) {
      newSpiderLeft = minSpiderLeft;
    } else if (newSpiderLeft > maxSpiderLeft) {
      newSpiderLeft = maxSpiderLeft;
    }

    if (newSpiderTop < minSpiderTop) {
      newSpiderTop = minSpiderTop;
    } else if (newSpiderTop > maxSpiderTop) {
      newSpiderTop = maxSpiderTop;
    }

    spider.style.left = `${newSpiderLeft}px`;
    spider.style.top = `${newSpiderTop}px`;
  }
});
