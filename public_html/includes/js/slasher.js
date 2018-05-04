/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask  if you get stuck. Write your own code.


Here are some helpful links:
•Array.prototype.slice()
•Array.prototype.splice()

 */

function slasher(arr, howMany) {
   arr.splice(0,howMany);
  return arr;
  //alert(arr.toString());
}
