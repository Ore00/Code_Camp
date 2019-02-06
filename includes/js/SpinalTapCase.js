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
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp
String.prototype.replace()

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things") should return "all-the-small-things".

 */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var newStr = str;
  function replacerNoSpaces(match, offset, string){ return (offset > 0 ? '-' : '')+ match.toLowerCase();}
  
  if(str.match(/[A-Z]/g) !== null && str.indexOf("_") < 0){     
  newStr = newStr.replace(/[A-Z]/g, replacerNoSpaces);   
  }
  if(str.indexOf(" ") < 0 && str.indexOf("_") < 0){     
  newStr = newStr.replace(/[A-Z]/g, replacerNoSpaces);
  }  
  if(str.indexOf("_") !== -1){     
  var reg = /[_]/g;
  newStr = newStr.replace(reg, "-").toLowerCase();    
  }  
  if(str.indexOf(" ") > 0){     
    var reg_space = /\s/g;
  newStr = newStr.replace(reg_space, "-").toLowerCase();
  }  
  newStr = newStr.replace(/--/g,"-");  
  str = newStr;
  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
