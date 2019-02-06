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
 */
/*
 * Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple
smallestCommons([1, 5]) should return a number.
smallestCommons([1, 5]) should return 60.
smallestCommons([5, 1]) should return 60.
smallestCommons([1, 13]) should return 360360.
smallestCommons([23, 18]) should return 6056820.
 */

function smallestCommons(arr) {
  //LCM(a,b) = (a*b)/GCD(a,b)
  var itemOne = arr.reduce(function(a,b){return Math.min(a, b);}); //Math.abs(arr[0]);
  var itemTwo = arr.reduce(function(a,b){return Math.max(a, b);}); //Math.abs(arr[1]);  
  var temp;
  var next;
  for(var x = itemOne; x <= itemTwo; x++){
    
    if(x < itemTwo){next = x + 1;} 
    if(x === itemOne){
    temp = getLCF(x, next);}
    else if(x === itemTwo){
    temp = getLCF(temp, x); 
    }
    else{
    temp = getLCF(temp, next);
    }  
} 
  
function getLCF(itemOne, itemTwo){
    var GCF = getGCF(itemOne, itemTwo);
    var LCF = (itemOne * itemTwo)/GCF;
    return LCF;
}
function getGCF(itemOne,itemTwo){      
    var arrOne = getFactors(itemOne);
    var arrTwo = getFactors(itemTwo);
    var a = getMatches(arrOne, arrTwo);
    var b = getMatches(arrTwo, arrOne);
    var fArray = a.concat(b);      
    var max = fArray.reduce(function(a,b){ return Math.max(a, b);});
        return max;
 }
function getMatches(itemOne,itemTwo){
   var matched = [];
   matched = itemOne.filter(function(e){return this.indexOf(e) > -1;}, itemTwo);
   return matched;
}
function getFactors(num){      
      var factors = [];      
      var x = num;
      //noprotect
     while( x > 0){     
        if(num % x === 0){
            factors.push(x);           
        }//end if  
        x = x - 1;
    }//end while     
    return factors;
  }//end function
function getSum(total, num){
      return total * num;
}
    
  return temp;
}


console.log(smallestCommons([23,18]));

