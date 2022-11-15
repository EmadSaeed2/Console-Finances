console.log('Financial Analysis\n' + '----------------');

// Get Total Months
var totalMonths = finances.length;

console.log('Total Months: ' + totalMonths);

/**********************************************************************/

// Get Net Total
netTotal = 0;
for (var i = 0; i < finances.length; i++) {
    netTotal += finances[i][1];
}

console.log('Net Total: $' + netTotal);

/**********************************************************************/

// Get Average Change

var changesArr = [];
var totalChange = 0;

// Comparing each month with the previous once
for (var i = 0; i < finances.length - 1; i++) {
    var a = finances[i][1];
    var b = finances[i + 1][1];

    if (finances[i][1] > finances[i + 1][1]) { // if lose - negative value
        change = (Math.abs(a - b)) * -1;
    } else { // if profit - positive value
        change = Math.abs(a - b);
    }
    totalChange += change;
    changesArr.push(change);
}

var averageChange = totalChange / (finances.length - 1);

console.log('Average Change: $' + Math.round(averageChange * 100) / 100);

// Sort Changes Array ascending
var sortedChangesArr = changesArr.concat().sort(function (x, y) { return x - y }); // using .concat() to make a copy and not to change the original array (changesArr) 

// console.log(changesArr);
// console.log(sortedChangesArr);

// Greatest Increase
var greatestIncreaseValue = sortedChangesArr[changesArr.length - 1]; // highest number on the sorted array
var greatestIncreaseMonth = finances[changesArr.indexOf(greatestIncreaseValue) + 1][0];

console.log(`Greatest Increase: ${greatestIncreaseMonth} ($${greatestIncreaseValue})`);

// Greatest Decrease
var greatestDecreaseValue = sortedChangesArr[0]; // lowest number on the sorted array
var greatestDecreaseMonth = finances[changesArr.indexOf(greatestDecreaseValue) + 1][0];

console.log(`Greatest Decrease: ${greatestDecreaseMonth} ($${greatestDecreaseValue})`);