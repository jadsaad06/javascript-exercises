const convertToCelsius = function(fTemp) {
  let celciusConv = (fTemp - 32) * (5/9);

  if(!Number.isInteger(celciusConv)) celciusConv = celciusConv.toFixed(1);
  
  return celciusConv;
};

const convertToFahrenheit = function(cTemp) {
  let fahrenheitConv = (cTemp/(5/9)) + 32;

  if(!Number.isInteger(fahrenheitConv)) fahrenheitConv = fahrenheitConv.toFixed(1);

  return fahrenheitConv;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
