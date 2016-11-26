import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Mitsubishi Configuration :: Object', () => {
  it('should have any keys of mitsubishi', () => {
    expect(CONFIG).to.have.any.keys('mitsubishi');
  });

  it('should Mitsubishi have an id property', () => {
    expect(CONFIG.mitsubishi).to.have.property('id');
  });

  it('should Mitsubishi have a coordinates property', () => {
    expect(CONFIG.mitsubishi).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.mitsubishi.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.mitsubishi.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.mitsubishi).to.contain.all.keys('id', 'coordinates');
  });
});
