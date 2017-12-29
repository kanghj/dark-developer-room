
// See https://stackoverflow.com/a/15302051 and http://jsfiddle.net/1y5ndc48/ for approach
function selectTextWidth(text) {
  let select = $('<select>').css({ display: 'none' });
  let opt = $('<option>').html(text);
  select.append(opt);
  select.appendTo('body');
  let w = select.width();
  select.remove();
  return w;
};

// choices is an array of either strings or arrays
function fillInTheBlanksElement(choices) {

  let elements = choices.map(c => {
    if (typeof c === 'string') {
      var span = $('<span>');
      span.html(c)
      return span;
    } else {
      var select = $('<select>');
      c.forEach(v =>
        select.append($("<option>").attr('value', v).text(v))
      );

      let onChange = () =>
        select.width(selectTextWidth(select.find('option:selected').text()));

      select.change(onChange);
      onChange();

      return select;
    }
  });

  let getValue = () => elements
    .map(e => e.prop('nodeName') === 'SPAN'? e.html() : e.val())
    .join('');

  let result = $('<div>');
  result.append(elements);

  return { elt: result, getValue };
}

