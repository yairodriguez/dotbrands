import { expect } from 'chai';
import Factory from '../../app/scripts/factory';

describe('Factory :: Object', () => {
  it('should be an instance of Object', () => {
    expect(Factory).to.be.an.instanceof(Object);
  });

  it('should exists', () => {
    expect(Factory).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('should be OK', () => {
    expect(Factory).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should be not null', () => {
    expect(Factory).to.not.be.a('null');
  });

  it('should not be undefined', () => {
    expect(Factory).to.not.be.an('undefined');
  });

  it('should not be empty', () => {
    expect(Factory).to.not.be.an('empty');
  });

  it('should contain an init property, instance of Function', () => {
    expect(Factory.init).to.be.an.instanceof(Function);
  });

  it('should contain a create property, instance of Function', () => {
    expect(Factory.create).to.be.an.instanceof(Function);
  });
});
