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

function calculateHourGlassScore (hourGlass = []) {
    const score = hourGlass.reduce((accumulator, value, index) => {
                if (index != 3 || index != 5 ) {
                    accumulator += value;
                }
                
                return accumulator;
            }, 0)
            
    return score
}

function main() {

    const arr = Array(6);
    const hourGlassScores = [];
    const hourGlasses = [];

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    
    console.log(arr)
    //! Identify the constraints starting and ending points
    for(let i = 0; i < 4; i++) {
        for( let j = 0; j < 4; j++) {
            const hourGlass = []
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    // process.stdout.write((arr[k][l]).toString())
                    hourGlass.push(arr[k][l])
                }
            }
            hourGlasses.push(hourGlass)
            hourGlassScores.push(calculateHourGlassScore(hourGlass))
            console.log(hourGlass)
        }
    }
    hourGlassScores.sort((prev, curr) => prev - curr)
    
    console.log(hourGlassScores.pop())
}
