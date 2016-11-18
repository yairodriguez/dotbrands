import { expect } from 'chai';
import CONFIG from '../../app/scripts/config';

describe('Config :: Object', () => {
  it('should be an instance of Object', () => {
    expect(CONFIG).to.be.an('Object');
  });

  it('should exists', () => {
    expect(CONFIG).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('should be OK', () => {
    expect(CONFIG).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should be not null', () => {
    expect(CONFIG).to.not.be.a('null');
  });

  it('should not be empty', () => {
    expect(CONFIG).to.not.be.an('empty');
  });

  it('should not be undefined', () => {
    expect(CONFIG).to.not.be.an('undefined');
  });
});
