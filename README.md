# throw

You can't use `throw` statement in expressions in JavaScript:

```js
arg = arg || throw new Error('arg is required');
// => SyntaxError: Unexpected token throw
```

This tiny library is wrapping `throw` in a function:

```js
var thr = require('throw');

// ...

arg = arg || thr('arg is required');
```

Messages can contain `printf`-like placeholders:

```js
arg = arg || thr('"%s" is required', argName);
```

You can specify instance of `Error` instead of message:

```js
arg = arg || thr(new Error('arg is required'));
```

Or parametrize error class:

```js
arg = arg || thr(Error, 'arg is required');
```

## Installation

```bash
$ npm install --save throw
```

## Usage

```js
var thr = require('throw');

var parsed = parse(str) || thr('Could not parse "%s"', str);
```

## License

MIT
