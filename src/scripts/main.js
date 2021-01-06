'use strict';

document.addEventListener('click', e => {
  if (e.target.classList.contains('wall')) {
    const spider = document.querySelector('.spider');
    let verticalPosition = (e.offsetY - spider.clientHeight / 2)
     > 0 ? e.offsetY - spider.clientHeight / 2 : 0;
    let horizontalPosition = (e.offsetX - spider.clientWidth / 2)
    > 0 ? e.offsetX - spider.clientWidth / 2 : 0;

    if (horizontalPosition >= e.target.clientWidth - spider.clientWidth) {
      horizontalPosition = e.target.clientWidth - spider.clientWidth;
    }

    if (verticalPosition >= e.target.clientHeight - spider.clientHeight) {
      verticalPosition = e.target.clientHeight - spider.clientHeight;
    }
    spider.style.top = `${verticalPosition}px`;
    spider.style.left = `${horizontalPosition}px`;
  }
});
