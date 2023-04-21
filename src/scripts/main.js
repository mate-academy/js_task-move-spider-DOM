'use strict';

const spider = document.querySelector('.spider');

document.addEventListener('click', clickEvent => {
  if (clickEvent.target.classList.contains('wall')) {
    const styles = window.getComputedStyle(clickEvent.target);
    const wallBorderWidth = parseInt(styles.getPropertyValue('border-width'));

    const moveVertically = clickEvent.offsetY - spider.clientHeight
    - wallBorderWidth;
    const moveHorizontally = clickEvent.offsetX - spider.clientWidth
    - wallBorderWidth;

    spider.style.position = 'relative';
    spider.style.left = `${moveHorizontally < 0 ? 0 : moveHorizontally}px`;

    spider.style.top = `${moveVertically < 0 ? 0 : moveVertically}px`;
  }
});
