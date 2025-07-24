
const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


  function isAdult(age){
 if (age >=18){
    return ('Adult')
 } else {
    return ('minor')
 }
}
  console.log('Exercise 2 Result:', isAdult(21));


  function isCharAVowel(char){
    if (char === 'a' || char === 'o' ||char === 'i' || char === 'u' || char === 'e'){
    return true
    } else { 
        return false
    }
   }
   console.log('Exercise 3 Result:', isCharAVowel("a"));


   function generateEmail(name,email){
    return `${name}@${email}`;
   }

   console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


   function greetUser(name,time){
    return `Good ${time}, ${name}!`;
   }
   console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


   function maxOfThree(a , b ,c){
    if (a >= b && a >= c) {
        return a;
    }
    else if (b >= c && b >= a ) {
    return b;
   }
    else {
        return c;
    }
}
   console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


   function calculateTip(bill , tip){
    return bill*(tip/100)
    }
    console.log('Exercise 7 Result:', calculateTip(50, 20));


    function convertTemperature(temp , scale ){
        if (scale == 'C' ){
            return (temp * 9/5)+ 32;
        }
        else if (scale == 'F' ){
            return (temp - 32) *5/9;
        }
        else {
            return "invaild";
        }
    }

        console.log('Exercise 8 Result:', convertTemperature(32, "C"));
    

        function basicCalculator(num1, num2, operation) {
            if (operation === "add") {
              return num1 + num2;
            } else if (operation === "subtract") {
              return num1 - num2;
            } else if (operation === "multiply") {
              return num1 * num2;
            } else if (operation === "divide") {
              return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            } else {
              return "Invalid operation";
            }
          }
          console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));


          function calculateGrade(score) {
            if (score >= 90) {
              return 'A';
            } else if (score >= 80) {
              return 'B';
            } else if (score >= 70) {
              return 'C';
            } else if (score >= 60) {
              return 'D';
            } else {
              return 'F';
            }
          }
          console.log('Exercise 10 Result:', calculateGrade(85));


          function createUsername(firstname , lastname) {
          const firstthree = firstname.slice(0,3);
          const lastthree = lastname.slice(0,3);
          const totalnumbers = firstname.length + lastname.length;
          return firstthree + lastthree + totalnumbers;
          }
          console.log('Exercise 11 Result:', createUsername("Samantha", "Green"));

          function numArgs() {
            return arguments.length;
          }
          
          console.log('Exercise 12 Result:', numArgs(1, 2, 3, 4));  // 4
          