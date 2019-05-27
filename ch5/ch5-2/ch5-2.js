var date = new Date();
var nextYr = `${(date.getMonth()+1) < 10 ? '0'+ (date.getMonth()+1) : date.getMonth()+1 }  ${date.getDate()} ${date.getFullYear() + 1}`;

document.write(`Date one year from today : ${nextYr}`);