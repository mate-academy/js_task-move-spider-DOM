document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (e.target.closest('.wall')) {
    const spiderRect = spider.getBoundingClientRect();
    const wallRect = wall.getBoundingClientRect();
    const wallOffset = 9.6;

    let newX = e.clientX - wallRect.left - spiderRect.width / 2 - wallOffset;
    let newY = e.clientY - wallRect.top - spiderRect.height / 2 - wallOffset;

    newX = Math.max(0, Math.min(newX, wall.clientWidth - spiderRect.width));
    newY = Math.max(0, Math.min(newY, wall.clientHeight - spiderRect.height));

    spider.style.transform = `translate(${newX}px, ${newY}px)`;
  }
});
