/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
Translate the provided string to pig latin. 
Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  var vowels = ["a", "e", "i", "o", "u"];  
  var myArray = str.split(""); 
  var myArrayLength = myArray.length;
  var len = str.length;
  var newString = "";
 
  //determine the first positon of a vowel
    for(pos = 0; pos < myArrayLength; pos++){
        if(vowels.indexOf(myArray[pos].toLowerCase()) !== -1){           
                break;
        }
    }
    //determine the word in piglatin
    if(pos == 0){
         str = newString.concat(str, "way").toLowerCase(); 
    }else{
        len = len - pos;
        str = newString.concat(str.substr(pos, len).toLowerCase(), str.substr(0, pos).toLowerCase(), "ay");
    }      
  
  return str;
}
