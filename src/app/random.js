
function random_numbers (min, max){
    let array_number = new Int32Array(1);
    window.crypto.getRandomValues(array_number);
    // map (input, in low, in high, out low, out high)
    // 2¨32 = 4294967296   el rango es entre los positivos y los negativos 2,147,483,648
    array_number = map(array_number[0], -2147483648, 2147483648, min, max);
    return array_number;
}

let numeroRandom = random_numbers(0,1)

console.log(numeroRandom)