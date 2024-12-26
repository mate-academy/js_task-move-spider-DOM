'use strict';

document.addEventListener('click', (e) => {
  const img = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  img.style.top = e.offsetY - img.clientHeight / 2 + 'px';
  img.style.left = e.offsetX - img.clientWidth / 2 + 'px';
});
