const convertToCelsius = function(fTemp) {
  let celciusConv = (fTemp - 32) * (5/9);

  if(!Number.isInteger(celciusConv)) celciusConv = Math.round(celciusConv * 10)/10;

  return celciusConv;
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheitConv = (cTemp/(5/9)) + 32;

  if(!Number.isInteger(fahrenheitConv)) fahrenheitConv = Math.round(fahrenheitConv * 10) / 10;

  return fahrenheitConv;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
