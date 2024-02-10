function numberCheck(number) {
    if (typeof number !== 'number'){
        return null;
    } else if (!isFinite(number)){
        return 'NonFinite';
    } else if (number > 0) {
        return 'Positive';
    } else if (number < 0) {
        return 'Negative'
    } else {
        return 'Zero';
    }
}

console.log(numberCheck(0))
