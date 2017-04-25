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

var checkNotes = countKeys([1, 8, 15]);
console.log(checkNotes);