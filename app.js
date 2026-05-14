//დავალეება 1
function isEmpty(str) {
    return str.trim() === '';
}   
console.log(isEmpty('')); // true
console.log(isEmpty('   ')); // true
console.log(isEmpty('Hello')); // false


//დავალეება 2
function convertToGel(dollars) {
    const exchangeRate = 3.0;   
    return dollars * exchangeRate;
}
console.log(convertToGel(10)); // 30
console.log(convertToGel(50)); // 150   
console.log(convertToGel(100)); // 300


//დავალეება 3
function getcountrycurency(country) 
    if (country === 'USd') {
        return 'USA';
    }
    else if (country === 'euro') {

        return 'EUR';
    }
    else if (country === 'GEL') {
        return 'Georgia';
    }
    else {
        return 'Unknown country';
    }           


console.log(getcountrycurency('USA')); // USD
console.log(getcountrycurency('EUR')); // EUR
console.log(getcountrycurency('Georgia')); // GEL
console.log(getcountrycurency('Japan')); // Unknown country

//დავალეება 4
function tolowercase(str) {
    return str.toLowerCase();
}
console.log(tolowercase('my name is jane')); // my name is jane

