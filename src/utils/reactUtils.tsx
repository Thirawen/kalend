export const parseEventString = (
  value: string,
  className: string,
  style: any
) => {
  let array = value.split('</br>');

  //if (newValueString.indexOf('\\n') !== -1) {
  //  newValueString = newValueString.replace(/\\n/g, ' ');
  //}

  //if (newValueString.indexOf('\\;') !== -1) {
  //  newValueString = newValueString.replace(/\\;/g, ';');
  //}
  //if (newValueString.indexOf('\\,') !== -1) {
  //  newValueString = newValueString.replace(/\\,/g, ',');
  //}

  return (
    <div>
      <p className={className} style={style}>
        {array[0]}
      </p>
      <p className={className} style={style}>
        {array[1]}
      </p>
    </div>
  );
};
