'use strict';

const spider = document.getElementById("spider");
const wall = document.getElementById("wall");

document.addEventListener("click", (event) => {
  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderHalfWidth = spiderRect.width / 2;
  const spiderHalfHeight = spiderRect.height / 2;

  // Desired center position
  let x = event.clientX - wallRect.left - spiderHalfWidth;
  let y = event.clientY - wallRect.top - spiderHalfHeight;

  // Clamp inside wall boundaries
  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height));

  // Apply position
  spider.style.left = `${x}px`;
  spider.style.top = `${y}px`;
});
