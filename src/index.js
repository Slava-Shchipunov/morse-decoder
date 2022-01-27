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
        // получаем массив строк, длинной 10 символов каждая
        let symbolsArray = expr.match(/.{1,10}/g);

        // создаём необходимые переменные
        let dubleArray = [];
        let resultStr = '';
        let morseStr;

        // функция перевода строки в код Морзе
        const morse = (str) => {
            dubleArray = str.match(/.{1,2}/g);
            morseStr = '';
            for (let i = 0; i < dubleArray.length; i++) {
                if (dubleArray[i] === '10') {
                    morseStr = morseStr + '.';
                } else if (dubleArray[i] === '11') {
                    morseStr = morseStr + '-';
                } else if (dubleArray[i] === '00') {
                    morseStr = morseStr + '';
                }
            }
        }

        // декодируем символы
        for (let j = 0; j < symbolsArray.length; j++) {
            if (symbolsArray[j] === '**********') {
                resultStr = resultStr + ' ';
            } else {
                morse(symbolsArray[j]);
                resultStr = resultStr + MORSE_TABLE[morseStr];
            }            
        } 
        
        return resultStr;
}

module.exports = {
    decode
}