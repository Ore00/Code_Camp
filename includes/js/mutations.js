/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask  if you get stuck. Write your own code.


Here are some helpful links:
•String.prototype.indexOf()

 */
function mutation(arr) {
  var aFirst = arr[0].toString();  
  aFirst = aFirst.toLowerCase();
  var aSecond = arr[1].toString();
  aSecond = aSecond.toLowerCase();
  var isMatch = true;
  
  for(n = 0; n < aSecond.length; n++){
      
     if(aFirst.indexOf(aSecond.substr(n,1).toString()) === -1){
         isMatch = false;}
    
  }
  //alert(isMatch);
  return isMatch;
}

