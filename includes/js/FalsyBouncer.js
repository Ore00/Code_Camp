/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask  if you get stuck. Write your own code.


Here are some helpful links:
•Boolean Objects
•Array.prototype.filter()

 */


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var myArr = arr.filter(function(item){
          return Boolean(item) !== false;});
  
  return myArr.filter(function(item){
         return item !== false && item !== "" && item!== undefined && item !== null && item !== 0;
   });
}