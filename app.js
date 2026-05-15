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
function getcountrycurency(country) { 
     if (country === 'USA') {
        return 'united states';
    }
    else if (country === 'EUR') {

        return 'europian union';
    }
    else if (country === 'GEL') {
        return 'Georgia';
    }
}
      


console.log(getcountrycurency('USA')); // united states
console.log(getcountrycurency('EUR')); // europian union
console.log(getcountrycurency('GEL')); // Georgia

//დავალეება 4
function tolowercase(str) {
    return str.toLowerCase();
}
console.log(tolowercase('my name is jane')); // my name is jane

//დავალეება 5

function getnumbersmorethan100(numbers) {
    return numbers.filter(num => num > 100);

}
console.log(getnumbersmorethan100([50, 150, 200, 75, 300])); // [150, 200, 300]

//დავალეება 6
console.log(data.js);
function getcheapestproducts(products) {
	let cheapestProducts = [];
	for (let i = 0; i < products.length; i++) {
		if (products[i].price < 100) {
			cheapestProducts.push(products[i]);
		}
	}	
	return cheapestProducts;
}
console.log 
console.log(getcheapestproducts(products))
