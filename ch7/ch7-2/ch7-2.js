function handleOptions(form) {
    var total = 0 ;
    if (form.elements["processor type"].value == 'i3'){
        total = 1000 ;
    }

    document.getElementById('total').innerHTML = 'this system costs:' + total ;
}