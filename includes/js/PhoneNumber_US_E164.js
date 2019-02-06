/* 
 * Copyright (C) 2018 - Linda
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
 * Write a function that accepts a user input phone number as a string 
 * and returns a normalized United States phone number in E.164 format. 
 * Return null (or an equivalent value) if the user input is invalid.
 */

function formatPhoneNumberUS(str){
  let regNondigit = /[^0-9]/g;
  //let acceptableChar = /[^\d\s\)\(\+\-]/g;
  let allDigits = str.replace(regNondigit, "");
  let len = allDigits.length;
  let USphone = "";
   if(len == 10){
       //add plus and country code 1 to the phone number
      let prefix = "+1";
      USphone = prefix.concat(allDigits);
   }else if(len == 11){
      if(allDigits.substr(0,1) != "1"){ 
          //reject because US country code should be 1
          USphone = null; 
      }else{
          //add plus sign to the country code and phone number
          let prefix = "+";
          USphone = prefix.concat(allDigits);
       }      
  }else{
      //reject and render null since the number of digits isn't correct
     USphone = null;
  }
  return USphone;
}

//Test cases using the function
console.log(formatPhoneNumberUS("123**&!!asdf#"));
console.log(formatPhoneNumberUS("(555)555-5555"));
console.log(formatPhoneNumberUS("1 666)555-5555"));
console.log(formatPhoneNumberUS("2(757)622-7382"));
console.log(formatPhoneNumberUS("55555555"));
console.log(formatPhoneNumberUS("1 214) 678-3590"));