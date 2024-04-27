function processData(input) {
  const inputArray = input.split("\n")
  const phoneNumbersCount = inputArray[0]
  const phoneBook = {}
  const lookupNames = []
  
  for (let i = 1; i < inputArray.length; i++) {
      if (i <= phoneNumbersCount) {
          const contact = inputArray[i].split(" ")
          phoneBook[contact[0]] = contact[1]
      } else {
          lookupNames.push(inputArray[i])
      }
  }

  lookupNames.forEach((key) => {
      if (phoneBook[key]) {
          console.log(`${key}=${phoneBook[key]}`)
      } else {
          console.log("Not found")
      }
  })
  
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
