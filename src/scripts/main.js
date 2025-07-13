'use strict';

document.addEventListener('click', (e) => {
  if (e.target.closest('.wall')) {
    let left =
      e.clientX -
      document.querySelector('.wall').offsetLeft -
      document.querySelector('.spider').clientWidth / 2 -
      (document.querySelector('.wall').offsetWidth -
        document.querySelector('.wall').clientWidth) /
        2;
    let WallTop =
      e.clientY -
      document.querySelector('.wall').offsetTop -
      document.querySelector('.spider').clientHeight / 2 -
      (document.querySelector('.wall').offsetHeight -
        document.querySelector('.wall').clientHeight) /
        2;

    const maxTop =
      document.querySelector('.wall').clientHeight -
      document.querySelector('.spider').clientHeight;
    const maxLeft =
      document.querySelector('.wall').clientWidth -
      document.querySelector('.spider').clientWidth;

    if (left < 0) {
      left = 0;
    }

    if (left > maxLeft) {
      left = maxLeft;
    }

    if (WallTop < 0) {
      WallTop = 0;
    }

    if (WallTop > maxTop) {
      WallTop = maxTop;
    }

    document.querySelector('.spider').style.left = left + 'px';
    document.querySelector('.spider').style.top = WallTop + 'px';
  }
});
