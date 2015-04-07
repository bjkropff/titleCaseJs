function titleCase1(word) {
    // var new_word = word[0].toUpperCase() + word.slice(1);
    word = word.replace(word[0], word[0].toUpperCase());
    var i = 1;
    var j = 2;
    while(i<(word.length)) {
        word = word.replace(word[i], word[i].toLowerCase());
        i++;
    }
    return word;
}
