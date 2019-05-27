function displayLinks() {
    var links = document.getElementsByTagName("a");
    var hrefs = [] ;
    for(let i = 0 ; i < links.length ; i++){
        hrefs.push(links[i].getAttribute('href')+'<br/>');
    }
    document.getElementById('hrefs').innerHTML = hrefs.join('');

}

//document.onload = displayLinks();