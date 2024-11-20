'use strict';

document.addEventListener('click', (e) => {
  e.preventDefault();

  const container = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const containerParams = container.getBoundingClientRect();
  const spiderParams = spider.getBoundingClientRect();

  if (e.target.closest('.wall')) {
    let coordY =
      e.clientY -
      containerParams.top -
      container.clientTop -
      spiderParams.height / 2;
    let coordX =
      e.clientX -
      containerParams.left -
      container.clientLeft -
      spiderParams.width / 2;

    if (coordY < 0) {
      coordY = 0;
    } else if (coordY + spiderParams.height > container.clientHeight) {
      coordY = container.clientHeight - spiderParams.height;
    }

    if (coordX < 0) {
      coordX = 0;
    } else if (coordX + spiderParams.width > container.clientWidth) {
      coordX = container.clientWidth - spiderParams.width;
    }

    spider.style.top = coordY + 'px';
    spider.style.left = coordX + 'px';
  }
});
