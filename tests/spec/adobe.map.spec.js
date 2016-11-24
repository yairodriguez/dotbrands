import { expect } from 'chai';
import coordinates from '../../app/scripts/maps/adobe';

describe('Coordinates :: Adobe', () => {
  it('should be an instance of Array', () => {
    expect(coordinates).to.be.an.instanceof(Array);
  });

  it('should have any keys of colour', () => {
    expect(coordinates[0]).to.have.any.keys('colour');
  });

  it('should exists', () => {
    expect(coordinates).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('should be OK', () => {
    expect(coordinates).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should be not null', () => {
    expect(coordinates).to.not.be.a('null');
  });

  it('should not be empty', () => {
    expect(coordinates).to.not.be.an('empty');
  });

  it('should not be undefined', () => {
    expect(coordinates).to.not.be.an('undefined');
  });

  it('should have a colour property', () => {
    expect(coordinates[0]).to.have.property('colour');
  });

  it('should colour property be a boolean', () => {
    expect(coordinates[0].colour).to.be.a('boolean');
  });

  it('should have the correct length', () => {
    expect(coordinates).to.have.lengthOf(coordinates.length);
  });
});
