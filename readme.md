# get-emails [![Build Status](https://travis-ci.org/sindresorhus/get-emails.svg?branch=master)](https://travis-ci.org/sindresorhus/get-emails)

> Get all email addresses in a string

The returned list is uniquified.


## Install

```
$ npm install --save get-emails
```


## Usage

```js
var getEmails = require('get-emails');

var text = 'Lorem ipsum dolor sit amet, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

getEmails(text);
//=> ['sindresorhus@gmail.com', 'unicorn@rainbow.cake']
```


## CLI

```
$ npm install --global get-emails
```

```
$ get-emails --help

  Usage
    $ get-emails <file>
    $ cat <file> | get-emails
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
