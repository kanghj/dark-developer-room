
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

