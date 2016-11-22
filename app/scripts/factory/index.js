import { generateMarkup, appendMarkup } from '../utils';

const proto = {
  init (id, coordinates) {
    const markup = appendMarkup(id, coordinates); // eslint-disable-line no-unused-vars
  },

  create (logo) {
    const markup = generateMarkup(logo.coordinates);
    this.init(logo.id, markup);
  },
};

const Factory = () => Object.create(proto);

export default Factory();
