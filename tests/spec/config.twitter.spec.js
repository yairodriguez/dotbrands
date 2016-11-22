import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Twitter Configuration :: Object', () => {
  it('should have any keys of twitter', () => {
    expect(CONFIG).to.have.any.keys('twitter');
  });

  it('should Twitter have an id property', () => {
    expect(CONFIG.twitter).to.have.property('id');
  });

  it('should Twitter have a coordinates property', () => {
    expect(CONFIG.twitter).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.twitter.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.twitter.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.twitter).to.contain.all.keys('id', 'coordinates');
  });
});
