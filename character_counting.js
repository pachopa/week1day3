var string = "lighthouse in the house";
function countLetters(value) {
  var output = {};
  var result = value.split(" ");
  //console.log(result.length);
  // for(var i = 0; i < value.length; i++) {
  //   var word = value[i];
  //   if(output[word]) {
  //     output[word] += 1;
  //   } else {
  //     output[word] = 1;
  //   }
  for(var i = 0; i < result.length; i++) {
    var words = result[i];
    for(var a = 0; a < words.length; a++) {
      var word = words[a];
      if(output[word]) {
        output[word] += 1;
      } else {
        output[word] = 1;
      }
    }
  }
  return output;

}
console.log(countLetters(string));
