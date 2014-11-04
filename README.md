simple-token
============

[![Build Status](https://travis-ci.org/esco/simple-token.svg?branch=master)](https://travis-ci.org/esco/simple-token) [![Coverage Status](https://coveralls.io/repos/esco/simple-token/badge.png)](https://coveralls.io/r/esco/simple-token) [![Code Climate](https://codeclimate.com/github/esco/simple-token/badges/gpa.svg)](https://codeclimate.com/github/esco/simple-token)

Create a string representation of an object or primative

```javascript
var tokenize = require('simple-token');

tokenize(42);
// 42
tokenize('foo');
// foo
tokenize({ foo: 'bar' });
// $1
```