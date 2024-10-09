'use strict';

document.addEventListener('click', (e) => {
  const relatedTarget = e.target.closest('.wall');
  const getSpider = document.querySelector('.spider');

  if (relatedTarget) {
    const rect = relatedTarget.getBoundingClientRect();
    const widthContainer = rect.width;
    const heightContainer = rect.height;

    const widthSpider = getSpider.clientWidth;
    const heightSpider = getSpider.clientHeight;

    // Отримуємо стиль рамки
    const style = getComputedStyle(relatedTarget);
    const borderLeft = parseInt(style.borderLeftWidth);
    const borderTop = parseInt(style.borderTopWidth);
    const borderRight = parseInt(style.borderRightWidth);
    const borderBottom = parseInt(style.borderBottomWidth);

    const subWidth = widthContainer - widthSpider - borderLeft - borderRight;
    const subHeight = heightContainer - heightSpider - borderTop - borderBottom;

    const forX = e.clientX - rect.left - widthSpider / 2 - borderLeft;
    const forY = e.clientY - rect.top - heightSpider / 2 - borderTop;

    const newX = Math.max(0, Math.min(subWidth, forX));
    const newY = Math.max(0, Math.min(subHeight, forY));

    getSpider.style.left = newX + 'px';
    getSpider.style.top = newY + 'px';
  }
});
