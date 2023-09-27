
var myInteger = 42;


var myBoolean = true;

var myString = "Hello, World!";


var myDate = new Date();


var myUndefined = undefined;


var arrayOfIntegers = [1, 2, 3, 4, 5];


var arrayOfStrings = ["apple", "banana", "cherry"];


var arrayOfMixed = [1, "apple", true, null, 42.5];


var myObject = {
    ID: 1,
    Name: "ABC"
};

console.log(myInteger);


var num1 = Number("123");
console.log(num1); 

var num2 = Number("12.34");
console.log(num2); 

var num3 = Number("Hello");
console.log(num3); 


var int1 = parseInt("123");
console.log(int1); 

var int2 = parseInt("12.34");
console.log(int2); 
var int3 = parseInt("Hello");
console.log(int3); 

var float1 = parseFloat("123");
console.log(float1); 

var float2 = parseFloat("12.34");
console.log(float2); 

var float3 = parseFloat("Hello");
console.log(float3);


function printStringProperties(obj) {
    for (var key in obj) {
      if (typeof obj[key] === 'string') {
        console.log(key + ": " + obj[key]);
      }
    }
  }
  
  // Example object
  var person = {
    firstName: "Syeda Qirrat",
    lastName: "Fatima",
    age: 20,
    email: "syedaqirratfatima@gmail.com"
  };
  
  // Call the function to print string properties
  printStringProperties(person);

  function checkEvenOrOdd(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      console.log("Please provide a valid number.");
      return;
    }
  
    for (var i = 1; i <= number; i++) {
      if (i % 2 === 0) {
        console.log(i + " is even.");
      } else {
        console.log(i + " is odd.");
      }
    }
  }
  
  checkEvenOrOdd(9);
  
  function checkSpeed(speed) {
    if (typeof speed !== 'number' || isNaN(speed)) {
      console.log("Please provide a valid number for speed.");
      return;
    }
  
    if (speed < 70) {
      console.log('Good Safe Driving');
    } else if (speed >= 70 && speed <= 120) {
      const penaltyPoints = Math.floor((speed - 70) / 5);
      console.log('Speed Limit Crossed by Penalty Point ' + penaltyPoints);
      if (penaltyPoints > 10) {
        console.log('License Suspended');
      }
    } else {
      console.log('License Suspended');
    }
  }
  
  // Example usage:
  checkSpeed(650); // Good Safe Driving
  checkSpeed(725); // Speed Limit Crossed by Penalty Point 1
  checkSpeed(120); // Speed Limit Crossed by Penalty Point 10
  checkSpeed(130); // License Suspended

  
  const calculateGrade = (marks) => {
    if (!Array.isArray(marks) || marks.length === 0) {
      return "Invalid input. Please provide an array of marks.";
    }
  
    const sum = marks.reduce((acc, current) => acc + current, 0);
    const average = sum / marks.length;
  
    let grade;
  
    if (average >= 90) {
      grade = "A+";
    } else if (average >= 80) {
      grade = "A";
    } else if (average >= 70) {
      grade = "B";
    } else if (average >= 60) {
      grade = "C";
    } else if (average >= 50) {
      grade = "D";
    } else {
      grade = "F";
    }
  
    return `Total Marks: ${sum}, Average Marks: ${average.toFixed(2)}, Grade: ${grade}`;
  };
  
  // Example usage:
  const marksArray = [40,88,54,34,99];
  console.log(calculateGrade(marksArray)); 

  const reverseString = function(str) {
    return str.split('').reverse().join('');
  };
  
  const originalString = "Reverse String";
  const reversedString = reverseString(originalString);
  console.log(reversedString); 
  

  function elementsWithDigits(inputArray) {
    if (!Array.isArray(inputArray)) {
      return "Please provide a valid array.";
    }
  
    // Filter the array to include only elements with digits
    const resultArray = inputArray.filter((element) => {
      if (typeof element === 'string') {
        // Use a regular expression to check if the element contains a digit
        return /\d/.test(element);
      }
      return false;
    });
  
    return resultArray;
  }
  
  const inputArray = ["apple", "banana", "cherry", "123abc", "xyz456", 789];
  const elementsWithDigitsArray = elementsWithDigits(inputArray);
  console.log(elementsWithDigitsArray); // Output: ["123abc", "xyz456", 789]
  
  function displayObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
      console.log("Please provide a valid object.");
      return;
    }
  
    if (Object.keys(obj).length === 0) {
      console.log("The object is empty.");
      return;
    }
  
    function displayRecursive(obj, parentKey = '') {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          displayRecursive(obj[key], parentKey + key + '.');
        } else {
          console.log(parentKey + key + ': ' + obj[key]);
        }
      }
    }
  
    displayRecursive(obj);
  }
  
  // Example usage:
  const nyObject = {
    name: "Syeda Qirrat",
    age: 20,
    address: {
      street: "123 Main St",
      city: "ville",
    },
    hobbies: ["Reading", "Gardening"],
  };
  
  displayObject(nyObject);
  
  function replaceMinOccurrencesWithNegativeOne(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
      console.log("Please provide a valid non-empty array of numbers.");
      return;
    }
  
    // Find the minimum value in the array
    const minValue = Math.min(...numbers);
  
    // Count the occurrences of the minimum value
    const minCount = numbers.filter((num) => num === minValue).length;
  
    // Replace all occurrences of the minimum value with -1
    const replacedArray = numbers.map((num) => (num === minValue ? -1 : num));
  
    console.log("Minimum Value:", minValue);
    console.log("Occurrences of Minimum Value:", minCount);
    console.log("Array with Minimum Value Replaced:", replacedArray);
  }
  
  // Example usage:
  const numbersList = [3, 1, 2, 1, 4, 1, 5];
  replaceMinOccurrencesWithNegativeOne(numbersList);
  