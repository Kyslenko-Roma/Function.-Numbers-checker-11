function receive(number) {
    if (typeof number !== 'number'){
        return null;
    } else if (isNaN(number) || !isFinite(number)){
        return 'NonFinite';
    }  else if (number > 0) {
        return 'Positive';
    }   else if (number < 0) {
        return 'Negative'
    }else {
        return 'Zero';
    }
}

console.log(receive(0))
