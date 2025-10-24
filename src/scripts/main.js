'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!wall || !spider) return;

  wall.addEventListener('click', (event) => {
    const wallRect = wall.getBoundingClientRect();

    // Pozycja kliknięcia względem ściany
    const clickX = event.clientX - wallRect.left;
    const clickY = event.clientY - wallRect.top;

    // Pozycja środka pająka
    const halfSpiderWidth = spider.offsetWidth / 2;
    const halfSpiderHeight = spider.offsetHeight / 2;

    // Wyliczamy nową pozycję
    let newLeft = clickX - halfSpiderWidth;
    let newTop = clickY - halfSpiderHeight;

    // Ograniczamy, żeby nie wyszedł poza ścianę
    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft + spider.offsetWidth > wallRect.width) {
      newLeft = wallRect.width - spider.offsetWidth;
    }
    if (newTop + spider.offsetHeight > wallRect.height) {
      newTop = wallRect.height - spider.offsetHeight;
    }

    // Ustawiamy styl pozycjonowania
    spider.style.position = 'absolute';
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  });
});
