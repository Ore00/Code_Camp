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
 * Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
 */

function sumFibsTest(num) {
  
   function isOdd(x){
      return(x%2 !== 0); 
   }
   function is_Square(x){
       x = parseInt(x);
       var  s = parseInt(Math.sqrt(x));
        return(s*s == x);
   }
   function isFib(x){  
        return Boolean(is_Square(5*x*x + 4) || is_Square(5*x*x - 4));
    }      
   var theSum = 1;
    while(num > 0){ 
        if(typeof num !== 'undefined' && isOdd(num) === true){
                 if (isFib(num) == true)
                 { theSum += num;
                // console.log("Is Fib: " + isFib(num) + " Num:" + num + "\n"); 
           }                     
      }
    num--;    
    } return theSum;
}

function sumFibs(num) {
  function isFib(x){ 
       
       var sqrPlus = parseInt(Math.sqrt(x));                   
        return (sqrPlus * sqrPlus == x );       
   }
   function isOdd(x){
      return(x%2 !== 0); 
   }
     
   var theSum = 1;
    while(num > 0){ 
   if(typeof num !== 'undefined' && isOdd(num) === true){ //noprotect
     if (isFib(parseInt(5*num*num + 4)) == true || isFib(parseInt(5*num*num - 4)) == true)
     { theSum = theSum + num;}
                     
      }
    num--;
    
    }    
 
  return theSum;
}


console.log(sumFibs(4000000));



