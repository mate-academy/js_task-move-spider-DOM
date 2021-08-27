'use strict';

document.addEventListener('click', e => {
  let wall = e.target.closest('.wall');

  if (wall) {
    wall = document.querySelector('.wall');

    const wallStyle = getComputedStyle(wall);
    const spider = document.querySelector('.spider');
    const spiderStyle = getComputedStyle(spider);

    /*
      coordX и coordY - это относительные координаты клика внутри стены (
      (координаты клика на странице) - (координаты начала стены)
        - (толщина рамки))
    */

    const coordX = e.clientX - wall.getBoundingClientRect().x
      - `${parseFloat(wallStyle.borderWidth)}`;
    const coordY = e.clientY - wall.getBoundingClientRect().y
      - `${parseFloat(wallStyle.borderWidth)}`;

    /* размеры стены */

    const wallWidth = parseFloat(wallStyle.width);
    const wallHeight = parseFloat(wallStyle.height);

    /*
      размеры половины картинки, будут использоваться при расчетах,
      чтоб паук не налазил на стены
    */

    const minShiftX = parseFloat(spiderStyle.width) / 2;
    const minShiftY = parseFloat(spiderStyle.height) / 2;

    /*
        если клик был к стене ближе чем 1/2 картинки ,то координата
        left будет 1/2 картинки, если ближе чем (ширина стены - 1/2 картинки),
        то будет (ширина стены - 1/2 картинки), во всех остальных случаях
        она равна координате клика
    */

    spider.style.left = (coordX < minShiftX) ? `${minShiftX}px`
      : (coordX > wallWidth - minShiftX) ? `${wallWidth - minShiftX}px`
        : `${coordX}px`;

    spider.style.top = (coordY < minShiftY) ? `${minShiftY}px`
      : (coordY > wallHeight - minShiftY) ? `${wallHeight - minShiftY}px`
        : `${coordY}px`;
    spider.style.transform = 'translate(-50%, -50%)';
  }
});
