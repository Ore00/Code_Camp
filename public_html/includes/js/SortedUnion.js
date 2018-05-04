/* 
 * Copyright (C) 2018Websani - RIMS - Linda
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.
 */

/*
 * Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.prototype.reduce()
 */
function uniteUnique() {
  var myArray = [];
  for(var element = 0; element < arguments.length; element++)
  {
      myArray[element] = arguments[element];
  }
  myArray = myArray.reduce(function(a,b){
      return a.concat(b);     
  }, []);
  arr = myArray.reduce(function(a,b){  
      
     if(a.length===0 || a.indexOf(b) < 0){
         a.push(b);
     }
     return a;
  }, []);   
  return arr;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));