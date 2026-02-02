# get-emails

> Get all email addresses in a string

## Install

```sh
npm install get-emails
```

## Usage

```js
import getEmails from 'get-emails';

const text = 'Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.';

getEmails(text);
//=> Set {'sindresorhus@gmail.com', 'unicorn@rainbow.cake'}
```

If the string comes from user input, it's up to you to limit it to some reasonable length to prevent abuse.

## Related

- [get-emails-cli](https://github.com/sindresorhus/get-emails-cli) - CLI for this module
