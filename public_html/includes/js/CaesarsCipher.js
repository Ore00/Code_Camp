/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13  cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13  encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask  if you get stuck. Try to pair program. Write your own code.


Here are some helpful links:
•String.prototype.charCodeAt()
•String.fromCharCode()

 */
function rot13(str){
    var tranStr = "";
    var cStr ="";
    var num; 
    
    for(i=0; i < str.length; i++){
        if(str.substr(i,1) === " " ){ 
            tranStr = tranStr + " "; 
            }else if(str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90){
                 tranStr = tranStr.concat(str.substr(i,1));
            }else {
        num = Math.abs(str.charCodeAt(i));
        
        if(num >= 65 && num <= 77){
           num = num - 65;
           num = 90 - (12 - num);
         }else{ 
            num = num - 13; 
            }
        cStr = String.fromCharCode(num);
        tranStr = tranStr.concat(cStr);}
        }
    return tranStr;
}

