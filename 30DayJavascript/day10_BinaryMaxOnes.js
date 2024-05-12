'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let n = parseInt(readLine().trim(), 10);
    let maxConsecOnes = 0;
    const bin = [];
    
    while (n != 0) {
        bin.push(n % 2);
        n = parseInt(n / 2);
    }
    
    bin.reduce((accumulator, curValue) => {    
        
        if (curValue) {
            accumulator++;
            if (maxConsecOnes < accumulator ) {
                maxConsecOnes = accumulator;
            }
            
            return accumulator;
        }
        
        return accumulator = 0;

    }, 0)
    console.log(maxConsecOnes)
    
}
