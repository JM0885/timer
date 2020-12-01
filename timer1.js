// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

//Put input numbers into an array
//Loop through array and set Timeout to equal the number in the array (*1000 for milliseconds)
// 
let input = process.argv.slice(2)
  .filter(alarmTime => !isNaN(alarmTime))
  .filter(alarmTime => alarmTime >= 0);

input.forEach((alarmTime) => {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, alarmTime * 1000);
});