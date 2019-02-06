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
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
HTML Entities
String.prototype.replace()

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
 */

function convertHTML(str) {
  // &colon;&rpar;
   
  var newStr = str;
  var htmlEntities = {"&":"&amp;", "<":"&lt;", ">":"$gt;", '"':"&quot;", "'":"&apos;"};
  str = "";
 
  for(var char in newStr){     

          if(htmlEntities.hasOwnProperty(newStr[char]) === true){
               console.log(htmlEntities[newStr[char]] + "\n");
                str = str.concat(htmlEntities[newStr[char]]);
          }else{        
                    str = str.concat(newStr[char]); 
                }
   
  }
  return str;
  
}

console.log(convertHTML("Dolce & Gabbana"));
