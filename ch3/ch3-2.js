
function writeTable(times,start,end) {
    for(let i = start ; i <= end ; i++){
        document.write(times + ' * '+ i +' = '+ (times*i) + '<br>');
    }

}

writeTable(4,4,9);