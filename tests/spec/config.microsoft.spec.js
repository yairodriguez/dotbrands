import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Microsoft Configuration :: Object', () => {
  it('should have any keys of microsoft', () => {
    expect(CONFIG).to.have.any.keys('microsoft');
  });

  it('should Microsoft have an id property', () => {
    expect(CONFIG.microsoft).to.have.property('id');
  });

  it('should Microsoft have a coordinates property', () => {
    expect(CONFIG.microsoft).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.microsoft.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.microsoft.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.microsoft).to.contain.all.keys('id', 'coordinates');
  });
});
