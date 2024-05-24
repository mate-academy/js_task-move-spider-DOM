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

    // Ensure the spider does not cross the wall boundaries
    if (coordY < 0) {
      coordY = 0;
    } else if (coordY > container.clientHeight - spider.clientHeight) {
      coordY = container.clientHeight - spider.clientHeight;
    }

    if (coordX < 0) {
      coordX = 0;
    } else if (coordX > container.clientWidth - spider.clientWidth) {
      coordX = container.clientWidth - spider.clientWidth;
    }

    spider.style.top = `${coordY}px`;
    spider.style.left = `${coordX}px`;
  }
});
