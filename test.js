// FUNCTIONS // 

// 1. capitalize string

function capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
}

// 1. reverse string

function reverse(string) {
    let reversedString = ""; 
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}

// 2. calculator object 

const calculator = () => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;

    return { add, sub, mult, div };
};

// 3. caesar cypher = shift alphabetical characters in a string based on input

function caesarCipher(string, num) {

    num = num % 26;

    let array = string.split('');
    return array.map(char => shiftChar(char, num)).join('');
}

function shiftChar(char, num) {

    if (char >= 'a' && char <= 'z') {
        return String.fromCharCode(((char.charCodeAt(0) - 97 + num + 26) % 26 + 97));
    }

    if (char >= 'A' && char <= 'Z') {
        return String.fromCharCode(((char.charCodeAt(0) - 65 + num + 26) % 26 + 65));
    }

    return char;
}

// 4. returns an object with average, min, max, length values from an array of integers

function analyzeArray(array) {
    const average = () => {
        let sum = 0;
        array.forEach(el => sum += el);
        return sum / array.length;
    }
    const min = () => Math.min(...array);
    const max = () => Math.max(...array);
    const length = () => array.length;

    return {
        'average' : average(),
        'min' : min(),
        'max' : max(),
        'length' : length()
    }
}


// TESTS // 

test('cat will become Cat', () => {
    expect(capitalize('cat')).toBe('Cat');
});

test('cat will become tac', () => {
    expect(reverse('cat')).toBe('tac');
});

test('3 plus 1 equals 4', () => {
    const calc = calculator(); 
    expect(calc.add(3, 1)).toBe(4); 
});

test('3 minus 1 equals 2', () => {
    const calc = calculator(); 
    expect(calc.sub(3, 1)).toBe(2); 
});

test('3 times 2 equals 6', () => {
    const calc = calculator(); 
    expect(calc.mult(3, 2)).toBe(6); 
});

test('6 divided per 2 equals 3', () => {
    const calc = calculator(); 
    expect(calc.div(6, 2)).toBe(3); 
});

test('"Hello, World!" is equal to "Khoor, Zruog!" with a shift of 3', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test('[1,8,3,4,2,6] is equal to {average: 4, min: 1, max: 8, length: 6}', () => {
    const obj = analyzeArray([1,8,3,4,2,6]);
    expect(obj).toEqual({average: 4, min: 1, max: 8, length: 6});
});




