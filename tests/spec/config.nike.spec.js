import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Nike Configuration :: Object', () => {
  it('should have any keys of nike', () => {
    expect(CONFIG).to.have.any.keys('nike');
  });

  it('should Nike have an id property', () => {
    expect(CONFIG.nike).to.have.property('id');
  });

  it('should Nike have a coordinates property', () => {
    expect(CONFIG.nike).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.nike.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.nike.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.nike).to.contain.all.keys('id', 'coordinates');
  });
});
