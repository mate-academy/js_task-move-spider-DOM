'use strict';

// -----------------------------------------------------------------------------

document.addEventListener('click', (e) => {
  const spider = document.querySelector('.spider');
  // Щоб курсор спрацьовував тілки на стіні
  const wall = e.target.closest('.wall');

  if (!wall) {
    return;
  }

  const spiderRect = spider.getBoundingClientRect();
  const wallRect = wall.getBoundingClientRect();

  // Координати кліка всередині стіни, центр павука під курсором
  let x = e.clientX - wallRect.left - spiderRect.width / 2;
  let y = e.clientY - wallRect.top - spiderRect.height / 2;

  // Обмеження руху павука всередині стіни (використовуємо clientWidth/Height)
  x = Math.max(0, Math.min(x, wallRect.width - spiderRect.width));
  y = Math.max(0, Math.min(y, wallRect.height - spiderRect.height));

  spider.style.left = `${x}px`;
  spider.style.top = y + 'px';
});

// -----------------------------------------------------------------------------

// eslint-disable-next-line max-len
// Різниця від першого варіанту в тому, що клік спрацьовує лише всередині стіни, павук тягнеться до курсору, але не виходить за рамки.

// document.addEventListener('click', (e) => {
//   const wall = document.querySelector('.wall');
//   const spider = document.querySelector('.spider');

//   const wallRect = wall.getBoundingClientRect();
//   const spiderRect = spider.getBoundingClientRect();

//   const spiderHalfWidth = spiderRect.width / 2;
//   const spiderHalfHeight = spiderRect.height / 2;

//   // Отримуємо товщину border
//   const style = getComputedStyle(wall);
//   const borderTop = parseFloat(style.borderTopWidth);
//   const borderLeft = parseFloat(style.borderLeftWidth);
//   const borderBottom = parseFloat(style.borderBottomWidth);
//   const borderRight = parseFloat(style.borderRightWidth);

//   // Відносні координати всередині стіни (без border)
//   let newTop = e.clientY - wallRect.top - spiderHalfHeight - borderTop;
//   let newLeft = e.clientX - wallRect.left - spiderHalfWidth - borderLeft;

//   // Обмеження руху павука всередині стіни
// eslint-disable-next-line max-len
//   newTop = Math.max(0, Math.min(newTop, wallRect.height - spiderRect.height - borderTop - borderBottom));
// eslint-disable-next-line max-len
//   newLeft = Math.max(0, Math.min(newLeft, wallRect.width - spiderRect.width - borderLeft - borderRight));

//   spider.style.top = `${newTop}px`;
//   spider.style.left = `${newLeft}px`;
// });

// -----------------------------------------------------------------------------
