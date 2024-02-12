// C = (°F - 32) × 5/9;

const convertToCelsius = function (temperature) {
  return Math.round((temperature - 32) * 5 / 9 * 10) / 10;
};

// F = (9/5 × °C) + 32.

const convertToFahrenheit = function (temperature) {
  return Math.round(((9 / 5 * temperature) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
