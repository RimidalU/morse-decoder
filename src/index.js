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
    '??':  '??',
    ' ':  ' ',
};

function decode(expr) {
 
 let t = 0;
 let text = '';
 

    while (t < expr.length){

        
        let morseResult = ''
       let i = 0;
        while (i < 10){
            if ((expr[t] ==='0') && (expr[t+1] === '0')){
                morseResult = morseResult + '';
                i = i + 2; 
                t = t + 2;       
            } else if ((expr[t] === '1') && (expr[t+1] === '1')){
                morseResult = morseResult + "-";
                i = i + 2;
                t = t + 2;
            } else if ((expr[t] === '*') && (expr[t+1] === '*')){
                morseResult = morseResult + ' ';
                t = t + 10;
                break;       
            } else if ((expr[t] === '1') && (expr[t+1] === '0')){
                morseResult = morseResult + ".";
                i = i + 2;
                t = t + 2;
            } else{
                morseResult = morseResult + "??";
                i = i + 2;
                t = t + 2;
            }
            }
           



    for (let char in MORSE_TABLE){
        if (morseResult === char){
        text = text + MORSE_TABLE[char];
         console.log (text);
        }
      
    } 
    //   t = t + 10;  
    }
    return text;
};

module.exports = {
    decode 
   
}