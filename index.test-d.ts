import {expectType} from 'tsd';
import getEmails from './index.js';

expectType<Set<string>>(getEmails('Lorem ipsum dolor, sindresorhus@gmail.com consectetuer unicorn@rainbow.cake elit.'));
