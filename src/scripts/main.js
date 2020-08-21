'use strict';

document.querySelector('.wall').addEventListener('click', e => {
  document.querySelector('.spider').style.cssText
  = `top: ${e.offsetY}px; left: ${e.offsetX}px`;
});
