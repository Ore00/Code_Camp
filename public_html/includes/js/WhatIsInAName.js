/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*
 * Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
 */

function whatName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
 for(x = 0; x <= collection.length -1; x++){
 var found = false; 
 var obj = collection[x];
for(var i in source){  
     if(source[i] === collection[x][i] && obj.hasOwnProperty(i) == true)
     { found = true; }else{ found = false; }
  
 } //end source for
   
   if(found == true){ 
    console.log(Object.entries(collection[x]));  
    arr.push(collection[x]);
   }     
         
        
}//end collection for 
  // Only change code above this line
  return arr;
}
