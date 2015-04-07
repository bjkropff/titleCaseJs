function titleCase1(word_entered) {
  // var new_word = word[0].toUpperCase() + word.slice(1);
  var array = word_entered.split(" ");
  for (var j = 0, len = array.length; j < len; j++) {
    var word = array[j];
    word = word.replace(word[0], word[0].toUpperCase());
    var i = 1;
    while(i<(word.length)) {
        word = word.replace(word[i], word[i].toLowerCase());
        i++;
    }
    if ((word === "And") || (word === "Or") || (word ==="The") && (j !== 0)) {
      word = word.replace(word[0], word[0].toLowerCase());
    }
    array[j] = word;
  }

  var results = array.join(" ");
  return results;
}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var word = $("input").val();
    var result = titleCase1(word);
    $(".returned_word").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
