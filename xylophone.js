function countKeys(inputArray) {
    var notesArray = [];
    for (var i = 0; i < inputArray.length; i++) {
        var currentNote = inputArray[i] % 7
        notesArray.push(currentNote);
    }
    console.log(notesArray);
    var finalNotesCount = notesArray.filter(function (item, index, notesArray) {
        return index === notesArray.indexOf(item);
    });
    console.log(finalNotesCount);
    return finalNotesCount.length;
}

var checkNotes = countKeys([5, 10, 20, 30, 11, 30, 24, 38, 5, 2, 9]);
console.log(checkNotes);