// Author: Jenny Mei
// Lab 13 - FizzBuzzBoom
// This function loops from 1 to 200 and prints “Fizz” for multiples of 3,
// “Buzz” for 5, “Boom” for 7, and combinations for numbers that match more than one.

function fizzBuzzBoom() {
    let oneLongString = "";
  
    for (let i = 1; i <= 200; i++) {
      let output = "";
  
      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      if (i % 7 === 0) output += "Boom";
  
      if (output === "") output = i;
  
      oneLongString += output + "<br>";
    }
  
    // Add final output to the page
    $("#output").html(oneLongString);
  }
  
  // Call the function
  fizzBuzzBoom();
  