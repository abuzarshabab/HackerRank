function processLogs(logs, threshold) {
  let transationDictionary = {}
  let overThreshold = []

  logs.forEach(element => {
    const transactionArray = element.split(" ");
    if (transactionArray[0] == transactionArray[1]) {
      increamentTransationCount(transactionArray[0])
    } else {
      increamentTransationCount(transactionArray[0])
      increamentTransationCount(transactionArray[1])
    }
  });

  Object.keys(transationDictionary).forEach((key) => {
    if (transationDictionary[key] >= threshold) {
      overThreshold.push(key)
    }
  })

  function increamentTransationCount(key) {
    console.log(transationDictionary[key])
    if (transationDictionary[key]) {
      transationDictionary[key] = transationDictionary[key] + 1;
    } else {
      transationDictionary[key] = 1
    }
  }

  return overThreshold;
}

let log = ["9 7 50", "2 7 20", "3 7 50"]
console.log(processLogs(log, 2))