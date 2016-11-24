import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Pepsi Configuration :: Object', () => {
  it('should have any keys of pepsi', () => {
    expect(CONFIG).to.have.any.keys('pepsi');
  });

  it('should Pepsi have an id property', () => {
    expect(CONFIG.pepsi).to.have.property('id');
  });

  it('should Pepsi have a coordinates property', () => {
    expect(CONFIG.pepsi).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.pepsi.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.pepsi.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.pepsi).to.contain.all.keys('id', 'coordinates');
  });
});
