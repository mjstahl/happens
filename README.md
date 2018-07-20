# Occurred
Simple abstractions for communicating that something happened.

## occurred/called

`called(<toExecute: Function>) -> <wrapped: Function>`

Take a single Function argument and returns a wrapped Function that is
semantically equivalent and accepts the same number of arguments.

```js
  var called = require('occurred/called')
  var add = called(function (x, y) {
    return x + y
  })
  add(2, 3) 
  
  //-> 5
```

`.subscribe(<callback: Function>) -> <unsubscribe: Function>`

Accepts a callback Function as an argument and returns an unsubscribe Function
used to remove the callback Function as a listener. When the wrapper Function
is executed, the callback function will be executed with the result.

```js
  var called = require('occurred/called')
  var add = called(function (x, y) {
    return x + y
  })
  var unsubscribe = add.subscribe(function (result) {
    return console.log('Hello ' + result)
  })
  add(2, 3)

  //-> 5
  //-> Hello 5

  unsubscribe()
  add(2, 3)

  //-> 5
```
