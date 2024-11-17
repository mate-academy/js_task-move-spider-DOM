1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://clavigo.github.io/js_task-move-spider-DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Move the spider

Move the spider to the cursor on click.

**Requirements:**

- The spider center should come exactly under the pointer on click (without crossing the wall edge).
- The spider can not cross wall boundaries.
- When the page is scrolled, nothing should break.

**Notes:**

- The code should work with spider and walls of any sizes, do not use hardcoded sizes values.
- Use properties event.clientX/event.clientY to get click coordinates.
- You can modify only `src/scripts/main.js` file.


### Gif of result
![](example/example.gif)
