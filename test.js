// test.js

const assert = require('assert');
const FlightTimeCalc = require('./index');

// Example OOOI times (replace with actual test cases)
const out = '2023-01-01T10:00:00Z';
const off = '2023-01-01T10:15:00Z';
const on = '2023-01-01T12:45:00Z';
const inTime = '2023-01-01T13:00:00Z';

const result = FlightTimeCalc(out, off, on, inTime);

assert.strictEqual(typeof result.flightTime, 'number');
assert.strictEqual(typeof result.blockTime, 'number');
console.log('All tests passed!');
