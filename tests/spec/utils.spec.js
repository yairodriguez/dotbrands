import { expect } from 'chai';
import { generateMarkup } from '../../app/scripts/utils';

describe('Utils :: function', () => {
  let fakeData = [];

  before(() => {
    fakeData = [{
      colour: true,
    }, {
      colour: false,
    }, {
      colour: false,
    }];
  });

  it('should not be undefined', () => {
    expect(generateMarkup).to.not.be.an('undefined');
  });

  it('should exists', () => {
    expect(generateMarkup).to.exist; // eslint-disable-line no-unused-expressions
  });

  it('should be OK', () => {
    expect(generateMarkup).to.be.ok; // eslint-disable-line no-unused-expressions
  });

  it('should return the correct markup when an array is provided', () => {
    const actual = generateMarkup(fakeData);
    const expected = "<div class='point active'></div><div class='point'></div><div class='point'></div>";

    expect(actual).to.equal(expected);
  });
});
