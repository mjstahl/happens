# Occurred
Simple abstractions for communicating that something happened.

## Installation

```js
$ npm install --save @mjstahl/occurred
```

## Usage

### called

https://www.npmjs.com/package/@mjstahl/called

```js
const { called } = require('@mjstahl/occurred')
```

`called(<toExecute: Function>) -> <wrapped: Function>`

Take a single Function argument and returns a wrapped Function that is
semantically equivalent and accepts the same number of arguments.


`.subscribe(<callback: Function>) -> <unsubscribe: Function>`

Accepts a callback function as an argument and returns an unsubscribe function
used to remove the callback function as a listener.

The callback function should accept two arguments. The 0th argument will be
an instance of Error if an error occurred in the wrapper function. If no error
occurred, the error argument will be null, and the 1st argument will be the
result of the wrapper function's execution.
