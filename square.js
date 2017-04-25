function isSqureFree(inputString) {
    var firstChar = inputString.charAt(0);
    if (inputString.length % 4 === 0) {
        var same = checkIfSame(inputString, firstChar);
    }
    if (same) {
        return 'not squarefree';
    }
    for (var i = 0; i < inputString.length; i++) {
        if (firstChar === inputString.charAt(i + 1)) {
            var pos = i + 1;
            var firstSubStr = inputString.substring(0, pos);
            var secondSubStr = inputString.substring(pos, inputString.length);
        }
    }

    if (firstSubStr === undefined || secondSubStr === undefined) {
        return 'square-free';
    }
    if (firstSubStr === secondSubStr) {
        return 'not squarefree';
    }
    else {
        return 'square-free';
    }

}

function checkIfSame(string, firstChar) {
    var chars = {};
    repeatedValue = '';
    for (var i = 0; i < string.length; i++) {
        if ((string[i] in chars === false)) {
            chars[string[i]] = 1;
            repeatedValue += string[i];
        }
    }
    if (repeatedValue === firstChar) {
        return true;
    }
    else {
        return false;
    }
}

var squareCheck = isSqureFree('beriberi');
console.log(squareCheck);
