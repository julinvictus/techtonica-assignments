//FINDING THE NUMBER OF minutes BETWEEN TWO DATES
let d3 = new Date(99, 5, 24, 11, 33, 30, 0);
let myBirthday = new Date(78, 8, 22, 22, 30, 0, 0);
const minutesBetweenDates = (date1, date2) => {
    let diff = date1.getTime() - date2.getTime();
    let microSecondsDiff = Math.abs(diff);
    // Number of milliseconds per day =
    //   24 hrs/day * 60 minutes/hour * 60 seconds/minute * 1000 msecs/second
    let minutesDiff = Math.floor(microSecondsDiff/(1000 * 60));
    return minutesDiff;
}
minutesBetweenDates(d3, myBirthday);