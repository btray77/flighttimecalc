class FlightTimeCalc {
  constructor() {
    // Constructor can be expanded to include more setup if necessary
  }

  // Helper function to parse the time strings
  parseTime(timeStr) {
    if (!timeStr) return null; // Return null if time string is not provided

    const time = timeStr.slice(0, 4); // Extract the time part (ignoring 'z')
    const hours = parseInt(time.substring(0, 2), 10);
    const minutes = parseInt(time.substring(2, 4), 10);
    // Assuming the date is the current date for simplicity
    const date = new Date();
    date.setUTCHours(hours, minutes, 0, 0); // Set hours and minutes in UTC
    return date;
  }

  formatTime(time) {
    return time === null || time === 0 ? null : parseFloat(time).toFixed(1);
  }

  oooiToDecimal(out, off, on, inTime) {
    const outTime = this.parseTime(out);
    const offTime = this.parseTime(off);
    const onTime = this.parseTime(on);
    const inTimeDate = this.parseTime(inTime);

    let flightTimeHours = null;
    // Calculate flight time only if both off and on times are provided
    if (offTime && onTime) {
      const flightTimeMs = onTime - offTime;
      flightTimeHours = flightTimeMs / 3600000; // Convert ms to hours
    }

    let blockTimeHours = null;
    // Calculate block time only if out and in times are provided
    if (outTime && inTimeDate) {
      const blockTimeMs = inTimeDate - outTime;
      blockTimeHours = blockTimeMs / 3600000; // Convert ms to hours
    }

    return {
      flightTime: this.formatTime(flightTimeHours), // Format and check for 0.0
      blockTime: this.formatTime(blockTimeHours), // Format and check for 0.0
    };
  }
}

module.exports = FlightTimeCalc;
