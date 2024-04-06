'use strict';

document.addEventListener('click', (e) => {
  if (e.target.className !== 'wall') {
    return;
  }

  const bug = document.querySelector('.spider');
  const wall = document.querySelector('.wall');

  const halfBugWidth = bug.clientWidth / 2;
  const halfBugHeight = bug.clientHeight / 2;

  const maxSafeX = wall.clientWidth - halfBugWidth;
  const maxSafeY = wall.clientHeight - halfBugHeight;

  const x = Math.min(Math.max(e.offsetX, halfBugWidth), maxSafeX);
  const y = Math.min(Math.max(e.offsetY, halfBugHeight), maxSafeY);

  bug.style.left = x - halfBugWidth + 'px';
  bug.style.top = y - halfBugHeight + 'px';
});
