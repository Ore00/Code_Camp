/* 
 * Copyright (C) 2018 Websani - RIMS - Linda
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
 * Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var myArr = [];
  arr.forEach(function(element){
          if(Array.isArray(element) === false){             
             myArr.push(element);          
      }
      else
      {
          var temp = [];
          temp = element;
         lowerLevel(temp); 
         }
  });

function lowerLevel(ele){
    for(var y = 0; y <= ele.length-1; y++){
        if(pushElement(ele[y]) === true) {
            lowerLevel(ele[y]);
        }                                
   }
}
function pushElement(element){
    if(Array.isArray(element) === false){
       if(element !== ""){
       myArr.push(element);
   }
    return false;
    }else{
        return true;
    }
}
return myArr
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
