function writeNames() {
    var name;
    var array = [] ;
    while( (name = prompt('Enter a name','')) != ''){
        array.push(name);
    }
    array.sort();
    document.write(array.join('<br/>'));
}

writeNames();