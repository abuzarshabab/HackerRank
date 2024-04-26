function processData(input) {
  //Enter your code here
  input = input.split('\n');

  for (i = 1; i < input.length; i++) {
    let splitWord = input[i].split('');

    let leftString = '';
    let rightString = '';

    for (x = 0; x < splitWord.length; x++) {
      if (x % 2 === 0) {
        leftString = leftString + splitWord[x];
      } else {
        rightString = rightString + splitWord[x];
      }
    }
    console.log(leftString + ' ' + rightString);
  }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
