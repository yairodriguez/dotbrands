let markup = '';

const proto = {
  init (id) {
    document.getElementById(id).innerHTML = markup;
  },

  create (logo) {
    logo.coordinates.map(o => {
      markup += (o.colour) ? `<div class='point ${o.fill ? o.fill : 'active'}'></div>` : `<div class='point'></div>`;
      }
    );

    this.init(logo.id);
  },
};

const Factory = () => Object.create(proto);

export default Factory();
