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
 * Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
 */
function fearNotLetter(str) {
    var tempStr = str;
    var num = tempStr.length -1;
    var missingChar;
    var currentChar;
    var nextChar;
    var nextNum = 1;
   
    for(var char = 0; char < tempStr.length; char++){
        currentChar = tempStr.charCodeAt(char) ;                    
        if(char < num){         
         nextChar = tempStr.charCodeAt(nextNum);            
            if(nextChar - currentChar !== 1){
               
                currentChar++;
                missingChar = String.fromCharCode(currentChar);                
                }   
         } 
         nextNum++;
    }
    str = missingChar;
    return str;
  }

console.log(fearNotLetter("abce"));