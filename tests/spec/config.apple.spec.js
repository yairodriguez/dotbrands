import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Apple Configuration :: Object', () => {
  it('should have any keys of apple', () => {
    expect(CONFIG).to.have.any.keys('apple');
  });

  it('should Apple have an id property', () => {
    expect(CONFIG.apple).to.have.property('id');
  });

  it('should Apple have a coordinates property', () => {
    expect(CONFIG.apple).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.apple.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.apple.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.apple).to.contain.all.keys('id', 'coordinates');
  });
});
