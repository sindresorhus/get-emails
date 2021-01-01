# get-emails

> Get all email addresses in a string


## Install

```
$ npm install get-emails
```


## Usage

```js
const getEmails = require('get-emails');

const text = 'Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

getEmails(text);
//=> Set {'sindresorhus@gmail.com', 'unicorn@rainbow.cake'}
```


## Related

- [get-emails-cli](https://github.com/sindresorhus/get-emails-cli) - CLI for this module


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
