const FlightTimeCalc = require('./FlightTimeCalc');
const flightTimeCalc = new FlightTimeCalc();

// Example 1: All OOOI times provided
const out1 = '1643z';
const off1 = '1701z'; // Off time provided
const on1 = '1901z'; // On time provided
const inTime1 = '1922z';

const result1 = flightTimeCalc.oooiToDecimal(out1, off1, on1, inTime1);

console.log(`Example 1 Results:`);
console.log(
  `Flight Time: ${
    result1.flightTime !== null ? result1.flightTime + ' hours' : 'N/A'
  }`
);
console.log(
  `Block Time: ${
    result1.blockTime !== null ? result1.blockTime + ' hours' : 'N/A'
  }`
);

// Example 2: Only Out and In times provided
const out2 = '1244z';
const inTime2 = '1636z';

const result2 = flightTimeCalc.oooiToDecimal(
  out2,
  undefined,
  undefined,
  inTime2
);

console.log(`\nExample 2 Results:`);
console.log(
  `Flight Time: ${
    result2.flightTime !== null ? result2.flightTime + ' hours' : 'N/A'
  }`
);
console.log(
  `Block Time: ${
    result2.blockTime !== null ? result2.blockTime + ' hours' : 'N/A'
  }`
);
