// Exercise: 1
function countVowels(str) {
  const vowels = "aeiouAEIOU"
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

console.log("Exercise: 1", countVowels("AbdallahAbdajiSalamalaicum"));

// Exercise: 2
function removeDuplicates(arr) {
  const uniqueNumbers = [arr[0]];
  for (let i = 0; i<arr.length; i++) {
    if (!uniqueNumbers.includes(arr[i])) {
      uniqueNumbers.push(arr[i]);
    }
  }

  return uniqueNumbers;
}

console.log("Exercise: 2", removeDuplicates([1, 2, 3, 4, 5, 1, 2, 3]));

// Exercise: 3
function findMax(arr) {
  let highestNumber = arr[0];
  let i = 0;
  while (arr.length > i) {
    if (highestNumber < arr[i]) {
      highestNumber = arr[i];
    }

    i++;
  }

  return highestNumber;
}

console.log("Exercise: 3", findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise: 4
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log("Exercise: 4" ,sumOfArray([1, 2, 3, 4, 5]));

// Exercise: 5
function fizzBuzz() {
  const result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if ( i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log("Exercise: 5", fizzBuzz());

// Exercise: 6
function mergeArrays(arr1, arr2) {
  const mergedArray = arr1.concat(arr2);
  return mergedArray.sort((a, b) => a - b);
}

console.log("Exercise: 6", mergeArrays([2, 4, 6], [1, 3, 5]));