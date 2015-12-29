# virtual-todos
> TodoMVC app rendering function implemented using virtual-dom

[![NPM][virtual-todos-icon] ][virtual-todos-url]

[![Build status][virtual-todos-ci-image] ][virtual-todos-ci-url]
[![semantic-release][semantic-image] ][semantic-url]

## Use

    npm install --save virtual-todos

Then from the main application that uses [virtual-dom](https://github.com/Matt-Esch/virtual-dom)
call the single exported function, passing an object with a list of todos

```js
var render = require('virtual-todos')
var virtualTree = render(Todos)
```

The virtual tree will become DOM tree, and the user will try to add, remove and mark todos
as done. Thus we need to have the following callbacks on the `Todos` object. Each may be a noop.

```js
var Todos = {
    items: [{ 
        what: 'do something', 
        id: 'ex102' 
    }],
    add: function (what) {},
    remove: function (item) {},
    mark: function (id, done) {},
    clearCompleted: function () {}
}
```

I recommend generating `Todos.items` using [fake-todos](https://github.com/bahmutov/fake-todos)

## Example

I have full application using this rendering function at 
[hydrate-vdom-todo](https://github.com/bahmutov/hydrate-vdom-todo) in both online
[src/app.js](https://github.com/bahmutov/hydrate-vdom-todo/blob/master/src/app.js) and
offline [hydrate-app.js](https://github.com/bahmutov/hydrate-vdom-todo/blob/master/hydrate-app.js)
modes.

### Small print

Author: Gleb Bahmutov &copy; 2015

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://glebbahmutov.com/blog/)

License: MIT - do anything with the code, but don't blame me if it does not work.

Spread the word: tweet, star on github, etc.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/virtual-todos/issues) on Github

## MIT License

Copyright (c) 2015 Gleb Bahmutov

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[virtual-todos-icon]: https://nodei.co/npm/virtual-todos.png?downloads=true
[virtual-todos-url]: https://npmjs.org/package/virtual-todos
[virtual-todos-ci-image]: https://travis-ci.org/bahmutov/virtual-todos.png?branch=master
[virtual-todos-ci-url]: https://travis-ci.org/bahmutov/virtual-todos
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release

