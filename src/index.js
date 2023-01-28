const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    return expr.split('**********').map(decodeWord).join(' ');
}

function decodeWord(word) {
    let tmp = []
    for (let i = 1; i <= word.length; i += 10) {
        tmp.push(word.slice(i-1, i+9));
    }
    return tmp.map(decodeLetter).join('');
}

function decodeLetter(numbers) {
    const code = getMorse(numbers);
    return MORSE_TABLE[code]
}

function getMorse(code) {
    let res = '';
    for (let i = 1; i <= 10; i += 2) {
        let v = code.slice(i-1, i+1);
        if (v === '10') {
            res += '.';
        } else if (v === '11') {
            res += '-'
        };
    }
    return res;
}

module.exports = {
    decode
}