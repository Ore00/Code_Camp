/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
 * 
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask  if you get stuck. Write your own code.

Here are some helpful links:
•Array.prototype.push()
•Array.prototype.slice()

 */

function chunkArrayInGroups(arr, size) {
  // Break it up.
var aSize = Math.round(Math.abs(arr.length/size));
  var i = 0;
  var p = size;
 var cSize = Math.abs(arr.length/size);
 

 if( arr.length%size > 0  && cSize >= aSize){aSize++; }
var myArr = new Array(aSize);
 
for(r = 0; r < aSize; r++)
{
     myArr[r] = arr.slice(i,p);
    i =i + size;
    p =p + size;
}
return myArr;
//alert(myArr.toString());
}


