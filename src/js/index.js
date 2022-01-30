// arrays and loop exercises
const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

// output every array number to console
const numberArray = () => {
    for (let i = 0; i < numbers.length; i++) {

        console.log(numbers[i]);

    }
}
    
// outputs squared numbers from Array
const arraySquared = () => {
    for (let i = 0; i < numbers.length; i++)
    console.log(numbers[i]**2)
}
   
// outputs only negative numbers from array
const arrayNegatives = () => {
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] < 0) {
            console.log(numbers[i])
        }
}

// absolute value of number in array
const arrayAbsolute = () => {
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] < 0) {
            console.log(-numbers[i])
        }
        else { console.log(numbers[i]) }
}

// find index of number -10
const arrayIndexOf = () => {
    for (let i = 0; i < numbers.length; i++)
        if (numbers[i] === -10) {
            console.log(i)
        }
      
}

// Output only even numbers from the array.
const arrayEvens = () => {
    for (let i = 0; i < numbers.length; i++)
        if ((numbers[i] % 2) === 0) {
            console.log(numbers[i])
        }
      
}

// For every number in the array output the difference between that number and number 5.
const diffFromFive = () => {

    for (let i = 0; i < numbers.length; i++)
        console.log(5 - numbers[i])

}

// For every number x in the array output the squared difference of x and number 5.
const squaredDiffFromFive = () => {
     for (let i = 0; i < numbers.length; i++){
    console.log((numbers[i]**2)-5)
}
}

// Count how many negative numbers are there in the array.
const arrayNegativesCount = () => {
let negCount = 0;

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] < 0) {

            negCount += 1;

        }
    }
    console.log(negCount)
}

// Compute the sum of all the numbers in the array. Answer: 70
const arrayCheckSum = () => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {

    console.log(sum += numbers[i]);

}
}

// Compute the average of the numbers in the array. Answer: 3.68421...
const arrayAverage = () => {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {

    console.log((sum += numbers[i])/numbers.length);

    }
}

// Compute the sum of all the positive numbers in the array.
const arrayPositiveSum = () => {
    let sum = 0;
    
        for (let i = 0; i < numbers.length; i++)
        if (numbers[i] > 0) {
            console.log(sum += numbers[i])
        }

}

// Output all the numbers which are greater than their predecessor in the array.
const arrayBiggerThanPredecessor = () => {
        
        for (let i = 0; i < numbers.length; i++)
        if (numbers[i] > numbers[i-1]) {
            console.log(numbers[i])
        }

}

// Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller than the number itself.
const arrayPeak = () => {
        
        for (let i = 0; i < numbers.length; i++)
        if (numbers[i] < numbers[i-1] && numbers[i] < numbers[i+1]) {
            console.log(numbers[i])
        }
}

// First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...
const sumOfSquaredDiff = () => {
let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
 console.log(sum)
}

const average = sum / numbers.length;

let sqSum = 0;

for(let i = 0; i < numbers.length; i++) {
    sqSum += (average - numbers[i]) ** 2;
console.log(sqSum)
}
}

// Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...



// just check if all is working
const itWorks = () => { console.log('It works!') };
