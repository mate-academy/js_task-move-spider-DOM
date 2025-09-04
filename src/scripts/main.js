'use strict';

const spider = document.querySelector('.spider');

if (spider.complete && spider.naturalWidth > 0) {
  spiderMove();
} else {
  spider.addEventListener('load', spiderMove);
}

function spiderMove() {
  const field = document.querySelector('.wall');
  const fieldWidth = field.offsetWidth;
  const fieldHeight = field.offsetHeight;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  field.addEventListener('click', (e) => {
    const rect = field.getBoundingClientRect();
    const coordX = e.clientX - rect.left;
    const coordY = e.clientY - rect.top;

    let positX = coordX - spiderWidth / 2;
    let positY = coordY - spiderHeight / 2;

    if (positX < 0) {
      positX = 0;
    }

    if (positX > fieldWidth - spiderWidth) {
      positX = fieldWidth - spiderWidth;
    }

    if (positY < 0) {
      positY = 0;
    }

    if (positY > fieldHeight - spiderHeight) {
      positY = fieldHeight - spiderHeight;
    }

    Object.assign(spider.style, {
      top: `${positY}px`,
      left: `${positX}px`,
    });
  });
}
