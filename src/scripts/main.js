function moveSpider(e) {
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

    coordY = Math.max(
      0,
      Math.min(coordY, container.clientHeight - spider.clientHeight),
    );

    coordX = Math.max(
      0,
      Math.min(coordX, container.clientWidth - spider.clientWidth),
    );
    spider.style.top = `${coordY}px`;
    spider.style.left = `${coordX}px`;
  }
}
document.addEventListener('click', moveSpider);
