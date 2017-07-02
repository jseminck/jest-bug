Default lock file comes with `jest@19.0.0`. Run `yarn test` and the log will be:

```
Ran all test suites.
  console.log tests/example-test.js:8
    1
```

Then do `yarn upgrade jest` and run `yarn test` again. Now the log is:

```js
  console.log tests/example-test.js:8
    undefined
```
