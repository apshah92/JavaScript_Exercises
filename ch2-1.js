function convert(temp){
    let fehr = (9/5) * temp + 32 ;
    if (fehr - Math.floor(fehr) < 0.5){
        return Math.floor(fehr);
    }else{
        return Math.ceil(fehr);
    }

}

var cent = 41 ;

console.log(`Fehrenheit equivalent of ${cent} is ${convert(cent)}`);