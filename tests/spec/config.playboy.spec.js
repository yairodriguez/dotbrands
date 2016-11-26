import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Playboy Configuration :: Object', () => {
  it('should have any keys of playboy', () => {
    expect(CONFIG).to.have.any.keys('playboy');
  });

  it('should Playboy have an id property', () => {
    expect(CONFIG.playboy).to.have.property('id');
  });

  it('should Playboy have a coordinates property', () => {
    expect(CONFIG.playboy).to.have.property('coordinates');
  });

  it('should id property be a string', () => {
    expect(CONFIG.playboy.id).to.be.a('string');
  });

  it('should coordinates property be an instace of Array', () => {
    expect(CONFIG.playboy.coordinates).to.be.an('Array');
  });

  it('should have all id, coordinates keys', () => {
    expect(CONFIG.playboy).to.contain.all.keys('id', 'coordinates');
  });
});
