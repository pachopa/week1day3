var string = "lighthouse in the house";
function countLetters(value) {
  var output = {};
  var result = value.split(" ").join("");

  console.log(result);
  for(var i = 0; i < result.length; i++) {
    var word = result[i];
      if(output[word]) {
      output[word] = output[word] + ", " + i;
    } else {
      output[word] = i;
    }
  }
  return output;
}
console.log(countLetters(string));
