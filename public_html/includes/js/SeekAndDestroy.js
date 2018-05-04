/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * 
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Remember to use Read-Search-Ask  if you get stuck. Write your own code.


Here are some helpful links:
•Arguments object
•Array.prototype.filter()

 */


function destroyer(arr){
   
   var args = Array.prototype.slice.call(arguments, 1);
   var myArr = arr;
   
       if(args.length > 1){
        return  arr.filter(function(item){
   { return args.indexOf(item) === -1 }
  });  
    }else{
         return myArr;
    }
    
   
}