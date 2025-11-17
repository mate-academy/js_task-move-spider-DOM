/* eslint-disable */
'use strict';

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  // Информация о пауке и стене
  const spiderInfo = spider.getBoundingClientRect();
  const wallInfo = wall.getBoundingClientRect();
  console.log(wallInfo);

  // Координаты клика относительно окна браузера

  const x = e.clientX; // узнаем где при клике гориз
  const y = e.clientY; // узнаем где вертикальна

  // Половина размеров паука (чтобы центр попал под курсор)
  const halfWidth = spiderInfo.width / 2;
  const halfHeight = spiderInfo.height / 2;

  // Рассчитываем позицию, куда переместить паука (верхний левый угол)
  let newLeft = x - wallInfo.left - halfWidth;
  let newTop = y - wallInfo.top - halfHeight;

  // Проверяем, чтобы паук не вылез за границы стены
  if (newLeft < 0) newLeft = 0;
  if (newTop < 0) newTop = 0;
  if (newLeft + spiderInfo.width > wallInfo.width) {
    newLeft = wallInfo.width - spiderInfo.width;
  }
  if (newTop + spiderInfo.height > wallInfo.height) {
    newTop = wallInfo.height - spiderInfo.height;
  }

  spider.style.left = `${newLeft}px`;
  spider.style.top = `${newTop}px`;
});

// Перемести паука к курсору при клике.

// Требования:

// Центр паука должен оказаться точно под курсором при клике (и не пересекать стену).

// Паук не может выходить за границы стен.

// При прокрутке страницы (scroll) всё должно работать корректно.
