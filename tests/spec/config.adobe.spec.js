import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Adobe Configuration :: Object', () => {
  it('should have any keys of apple', () => {
    expect(CONFIG).to.have.any.keys('adobe');
  });

  it('should Apple have an id property', () => {
    expect(CONFIG.adobe).to.have.property('id');
  });

  it('should Apple have a coordinates property', () => {
    expect(CONFIG.adobe).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.adobe.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.adobe.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.adobe).to.contain.all.keys('id', 'coordinates');
  });
});
