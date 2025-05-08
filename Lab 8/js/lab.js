/*
* Author: Jenny Mei <jmei15@ucsc.edu>
* Author: Walter Serwim <wserwin@ucsc.edu>
 * Created: May 6
 * License: Public Domain
 */


function isGreaterThanTen(x){
    return (x > 10);
  }
  
  // Test function
  console.log("Is 5 greater than 10? ", isGreaterThanTen(5));
  console.log("Is 15 greater than 10? ", isGreaterThanTen(15));
  
 
  let array = [4, 10, 12, 18, 2, 25, 8];
  console.log("My array: ", array);
  

  var result = array.map(isGreaterThanTen);

  // should return [false, false, true, true, false, true, false]
  console.log("Result of greater-than-ten check: ", result);
  
  
  var result2 = array.map(function(x){
    return x - 2;
  });
  // should return [2, 8, 10, 16, 0, 23, 6]
  console.log("Result of subtracting 2 from each number: ", result2);
  