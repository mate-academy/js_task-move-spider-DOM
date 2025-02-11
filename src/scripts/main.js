document.addEventListener('click', (ev) => {
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  // Get the dimensions of the wall
  const wallRect = wall.getBoundingClientRect();

  // Check if the click is inside the wall
  const isInsideWall =
    ev.clientX >= wallRect.left &&
    ev.clientX <= wallRect.right &&
    ev.clientY >= wallRect.top &&
    ev.clientY <= wallRect.bottom;
  // ev.clientY + spider.clientHeight + 20 >= wallRect.bottom &&
  // ev.clientX + spider.clientWidth + 20 >= wallRect.right &&
  // ev.clientY - spider.clientHeigth - 10 <= wallRect.top &&
  // ev.clientX - spider.clientWidth - 10 <= wallRect.left;

  if (isInsideWall) {
    // Calculate the new position of the spider
    const newLeft = ev.clientX - wallRect.left - spider.clientWidth / 2;
    const newTop = ev.clientY - wallRect.top - spider.clientHeight / 2;

    // Apply the calculated positions to the spider
    spider.style.left = `${newLeft}px`;
    spider.style.top = `${newTop}px`;
  }
});
