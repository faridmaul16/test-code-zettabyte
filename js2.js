const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
    if (Array.isArray(number)) {
        number.forEach(result);
        return;
    }
    if (number % 2 == 0) {
        console.log(number);
    }
}

console.log(result(number));