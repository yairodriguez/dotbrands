import Factory from './factory/index';
import CONFIG from './config';

/* eslint-disable no-unused-vars */
const Apple = Factory.create(CONFIG.apple);
const Twitter = Factory.create(CONFIG.twitter);
/* eslint-enable no-unused-vars */
