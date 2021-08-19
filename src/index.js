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
     console.log(expr);
expr =  expr.split("").reverse().join("");
let i = 0;
let morseResult = '';
while (i < expr.length){
    if (i % 10 == 0) {
        morseResult = `${'+'}${morseResult}`; 
    }
    if (expr[i] == '0' && expr[i+1] == '1'){
        morseResult = `${'.'}${morseResult}`;
        i = i + 2;
    }else if (expr[i] == '1' && expr[i+1] == '1'){
        morseResult = `${'-'}${morseResult}`;
        i = i + 2;
    }else if (expr[i] == '0' && expr[i+1] == '0'){
        morseResult = `${"  "}${morseResult}`;
        i = i + 2;
    }else if (expr[i] == '*' && expr[i+1] == '*'){
        morseResult = `${"**"}${morseResult}`;
        i = i + 2;
    }else{
    morseResult = `${"??"}${morseResult}`;
}
expr = Array.from(morseResult.split("+").map(space => space.trim()));
 
expr = (expr.map(function(value, MORSE_TABLE) {return MORSE_TABLE[value]}));


return expr;
}

};

module.exports = {
    decode
}