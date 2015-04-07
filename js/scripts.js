function titleCase(word_entered) {
  var array = word_entered.split(" ");
  var results = [];
  array.forEach(function(word) {
    results.push(word.toLowerCase());
  });

  results = results.join(" ");
  //console.log(results);
  return results;
}

function titleCase2(word_entered) {

  var array = word_entered.split(" ");
  var results = [];
  array.forEach(function(word) {
    results.push(word.toLowerCase());
  });


  var uc_results = [];
  results.forEach(function(letter) {
    uc_results.push(letter[0].toUpperCase() + letter.substring(1));
  });

  uc_results = uc_results.join(" ");
  //console.log(results);
  return uc_results;
}

function titleCase3(word_entered) {

  var array = word_entered.split(" ");
  var results = [];
  array.forEach(function(word) {
    results.push(word.toLowerCase());
  });


  var uc_results = [];
  results.forEach(function(letter) {
    uc_results.push(letter[0].toUpperCase() + letter.substring(1));
  });

  var final_results = [];
  uc_results.forEach(function(word) {
    if (word === "To") {
      final_results.push(word[0].toLowerCase() + word.substring(1));
    } else {
      final_results.push(word);
    }
  });

  final_results = final_results.join(" ");
  //console.log(results);
  return final_results;
}

function titleCase4(word_entered) {

  var array = word_entered.split(" ");
  var results = [];
  array.forEach(function(word) {
    results.push(word.toLowerCase());
  });


  var uc_results = [];
  results.forEach(function(letter) {
    uc_results.push(letter[0].toUpperCase() + letter.substring(1));
  });

  var ignore = ["On", "To", "The", "Is"];
  var final_results = [];
  uc_results.forEach(function(word) {
    var found = $.inArray(word, ignore);
    if (found > -1) {
      final_results.push(word[0].toLowerCase() + word.substring(1));
    } else {
      final_results.push(word);
    }
  });

  final_results = final_results.join(" ");
  //console.log(results);
  return final_results;
}

$(document).ready(function() {
  $("form#translator").submit(function(event) {
    var word = $("input").val();
    var result = titleCase4(word);
    $(".returned_word").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
