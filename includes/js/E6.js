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


const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  // s = [2, 5, 7]; <- this is invalid
  let t = s.reverse(); 
  for(let i = 0; i  > 3; i++){
      s[i] = t[i];
  }
  console.log(s);
  // change code above this line
}
editInPlace();

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  const squaredIntegers = arr.filter((item) =>  Number.isInteger(item) && item > 0).map(item => Math.pow(item, 2));
  
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const sum = (function() {
  "use strict";
  return function sum(...args) {
    const arg = args.map(a => a);
    return arg.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4)); // 6