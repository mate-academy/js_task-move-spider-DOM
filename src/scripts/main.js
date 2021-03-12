'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const spiderSize = {
  thick: (spider.clientWidth / 2),
  tall: (spider.clientHeight / 2),
};
const borderSize = wall.clientLeft;

document.addEventListener('click', e => {
  if (e.target.className !== 'wall') {
    return;
  }

  let spiderX;
  let spiderY;

  const maxOpenWidth = wall.clientWidth - spiderSize.thick;
  const maxOpenHeight = wall.clientWidth - spiderSize.tall;

  if (e.offsetX - spiderSize.thick
        > maxOpenWidth - spiderSize.thick - borderSize) {
    spiderX = (maxOpenWidth - spiderSize.tall) + 'px';
  }

  if (e.offsetX - spiderSize.thick <= 0) {
    spiderX = 0;
  }

  if (e.offsetY - spiderSize.tall
        > maxOpenHeight - spiderSize.tall - borderSize) {
    spiderY = (maxOpenHeight - spiderSize.tall) + 'px';
  }

  if (e.offsetY - spiderSize.tall <= 0) {
    spiderY = 0;
  }

  if (spiderY === undefined) {
    spiderY = e.offsetY - spiderSize.tall + 'px';
  }

  if (spiderX === undefined) {
    spiderX = e.offsetX - spiderSize.thick + 'px';
  }

  spider.style.top = spiderY;
  spider.style.left = spiderX;
});
