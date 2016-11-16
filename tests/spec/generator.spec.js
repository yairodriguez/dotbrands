import { expect } from 'chai';
import Generator from '../../app/scripts/generator';

describe('Generator :: Object', () => {
  it('should be an instance of Object', () => {
    expect(Generator).to.be.an.instanceof(Object);
  });

  it('should exists', () => {
    expect(Generator).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('should be OK', () => {
    expect(Generator).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should be not null', () => {
    expect(Generator).to.not.be.a('null');
  });

  it('should not be undefined', () => {
    expect(Generator).to.not.be.an('undefined');
  });

  it('should not be empty', () => {
    expect(Generator).to.not.be.an('empty');
  });

  it('should contain an init property, instance of Function', () => {
    expect(Generator.init).to.be.an.instanceof(Function);
  });

  it('should contain a create property, instance of Function', () => {
    expect(Generator.create).to.be.an.instanceof(Function);
  });
});
