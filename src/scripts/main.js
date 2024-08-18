'use strict';

document.addEventListener('click', (e) => {
  const wallElement = document.querySelector('.wall');
  const spiderElement = document.querySelector('.spider');

  const wallCoords = wallElement.getBoundingClientRect();

  if (!e.target.closest('.wall')) {
    return;
  }

  const spiderCoords = {
    top:
      e.clientY -
      wallCoords.top -
      wallElement.clientTop -
      spiderElement.clientHeight / 2,
    left:
      e.clientX -
      wallCoords.left -
      wallElement.clientLeft -
      spiderElement.clientWidth / 2,
  };

  if (spiderCoords.top < 0) {
    spiderCoords.top = 0;
  }

  if (spiderCoords.left < 0) {
    spiderCoords.left = 0;
  }

  if (spiderCoords.left + spiderElement.clientWidth > wallElement.clientWidth) {
    spiderCoords.left = wallElement.clientWidth - spiderElement.clientWidth;
  }

  if (
    spiderCoords.top + spiderElement.clientHeight >
    wallElement.clientHeight
  ) {
    spiderCoords.top = wallElement.clientHeight - spiderElement.clientHeight;
  }

  spiderElement.style.left = spiderCoords.left + 'px';
  spiderElement.style.top = spiderCoords.top + 'px';
});
