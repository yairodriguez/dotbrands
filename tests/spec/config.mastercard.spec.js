import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('MasterCard Configuration :: Object', () => {
  it('should have any keys of mastercard', () => {
    expect(CONFIG).to.have.any.keys('mastercard');
  });

  it('should MasterCard have an id property', () => {
    expect(CONFIG.mastercard).to.have.property('id');
  });

  it('should MasterCard have a coordinates property', () => {
    expect(CONFIG.mastercard).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.mastercard.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.mastercard.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.mastercard).to.contain.all.keys('id', 'coordinates');
  });
});
