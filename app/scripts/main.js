import Factory from './factory/index';
import CONFIG from './config';

/* eslint-disable no-unused-vars */
const Apple = Factory.create(CONFIG.apple);
const Twitter = Factory.create(CONFIG.twitter);
const Adobe = Factory.create(CONFIG.adobe);
const Pepsi = Factory.create(CONFIG.pepsi);
const MasterCard = Factory.create(CONFIG.mastercard);
/* eslint-enable no-unused-vars */
