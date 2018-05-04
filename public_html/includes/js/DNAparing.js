/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
 * The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

ATCGATTGAGCTCTAGCG
TAGCTAACTCGAGATCGC
 */

function pairElement(str) {
   var pairArray = [ {"A": "T"}, {"T": "A"},{"C": "G"},{"G":"C"}];
   var myArr = [];
  str = str.split("");
  for(var char in str){ 
     var newStr = [];  
     for(var x = 0; x < pairArray.length; x++){
         var obj = pairArray[x];
         if(obj.hasOwnProperty(str[char]) === true){         
             newStr.push(str[char]);
             newStr.push(obj[str[char]]);
             myArr.push(newStr);
          }         
      }   
  }
  str = myArr; 
  return str;
}