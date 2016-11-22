export const generateMarkup = coordinates => {
  let markup = '';

  coordinates.map(o => {
    markup += (o.colour) ? `<div class='point ${o.fill ? o.fill : 'active'}'></div>` : `<div class='point'></div>`;
  });

  return markup;
};

export const appendMarkup = (id, markup) => {
  document.getElementById(id).innerHTML = markup;
};
