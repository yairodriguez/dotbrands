import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('McDonalds Configuration :: Object', () => {
  it('should have any keys of apple', () => {
    expect(CONFIG).to.have.any.keys('mcdonalds');
  });

  it('should McDonalds have an id property', () => {
    expect(CONFIG.mcdonalds).to.have.property('id');
  });

  it('should McDonalds have a coordinates property', () => {
    expect(CONFIG.mcdonalds).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.mcdonalds.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.mcdonalds.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.mcdonalds).to.contain.all.keys('id', 'coordinates');
  });
});
