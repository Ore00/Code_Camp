/* 
 * Copyright (C) 2018 Linda McGraw
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

function isHappyNumber(num){
   const unhappy = [4, 16, 37, 58, 89, 145, 42, 20];  
   var strNum;  
   var prevNum = []; 
   var sumOfNum;   
   var isHappy = true;  //set isHappy to true, change  if a validation fails
   //stop script and return false if the number is negative
   if(num <  0) 
       return  isHappy = false;   
 //if value isn't a number return false 
 if(isNaN(num))
     return isHappy = false;
 //convert number to an array of individual numbers
 strNum = getNumbers(num); 
   //get the total for the square of each number in the list 
  sumOfNum =  strNum.reduce(sumNumber, 0);  
 
 while(sumOfNum !== 1){      
     //if the sum of numbers squared equals, 1 the number is happy
       if(sumOfNum  === 1){
               isHappy = true;
               break;
       }else{ 
           //if the sum of the number is an unhappy number stop
                if(unhappy.indexOf(Number(sumOfNum)) !== -1){             
                         isHappy = false;                        
                         break;
                 }
       //if the sum of numbers squared doesn't equals 1 add the sumOfNum to the list of numbers that have occurred 
               if(prevNum.indexOf(Number(sumOfNum)) !== -1){
                   isHappy = false;                   
                   break;
               }else{
                    prevNum.push(sumOfNum);
           }                  
           strNum =  getNumbers(sumOfNum);
           sumOfNum =  strNum.reduce(sumNumber, 0); 
       }
}//end while           
     return isHappy;    
}

function sumNumber(accumulator, currentValue){    
    //get the total of the square roots of all the numbers in an array  
     return  accumulator + Math.pow( currentValue, 2);     
}
function getNumbers(num){
    //convert an array of strings to numbers
    var arr = num.toString().split("");  
    var len = arr.length;
    var myArray = [];
    for(var i = 0 ; i < len; i++){
        myArray[i] = Number(arr[i]);
    }
    return myArray;
}
function sequenceOfHappyNumbers(startNum, howMany){
    var happyArray = [];
    var currentNumber = startNum;
    var x = 0;
    while(x < howMany){
       if(isHappyNumber(currentNumber) === true){
            happyArray.push(currentNumber);   
                        x++;
       }
       currentNumber++;
    }
    return happyArray;
}
//console.log("Happy = " +  isHappyNumber(7));
//console.log("List of happy numbers: " + sequenceOfHappyNumbers(1, 5));