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
 * 
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Arguments object
addTogether(2, 3) should return 5.
addTogether(2)(3) should return 5.
addTogether("http://bit.ly/IqT6zt") should return undefined.
addTogether(2, "3") should return undefined.
addTogether(2)([3]) should return undefined.

 */

function addTogether(x) {
 var addThem = false; 
 var len = arguments.length; 

    var args = [].slice.call(arguments);      
    addThem =  checkArgument(args);   
    
    if(addThem !== false && len === 1){
        return function(y){           
                if(typeof y === 'number'){            
                return x + y;
                }else{return undefined;}
       };
    }else if(len > 1 && addThem === true){
        return x + args[1];
    }else{ return undefined;     }
   
 
  function checkArgument(arr){
   var validNumber = true;
   if(Array.isArray(arr)){          
    for(var x = 0; x < arr.length; x++){          
          if(typeof arr[x] !== 'number'){
              validNumber = false;              
          }
      }
  }  
      return validNumber;
  }
  


}
console.log(addTogether(3, 6));
