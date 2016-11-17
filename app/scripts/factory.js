let markup = '';

const factory = {
  init (id) {
    document.getElementById(id).innerHTML = markup;
  },

  create (id, coordinates) {
    coordinates.map(o => {
      markup += (o.colour) ? `<div class='point ${o.fill ? o.fill : 'active'}'></div>` : `<div class='point'></div>`;
      }
    );

    this.init(id);
  },
};

export default factory;
