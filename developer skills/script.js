// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const frk = 'ayo';
console.log(frk);
{
}
const temperature = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTemp = function (t1, t2) {
  let temp = t1.concat(t2);
  console.log(temp);
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;
    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }

  console.log(max, min);
  return max - min;
};
console.log(calcTemp([3, 5, 1], [9, 0, 5]));

const measurementKelvin = function () {
  const measurement = {
    unit: 'kelvin',
    type: 'temp',
    value: Number(prompt('what is the value in kelvin')),
  };
  console.table(measurement);
  const calc = measurement.value + 273;
  return calc;
};

// console.error(measurementKelvin);
// console.warn(measurementKelvin);
console.log(measurementKelvin());
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]} in ${i + 1} days... `;
  }
  console.log(`...` + str);
};
printForecast(data1);
