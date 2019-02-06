/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function chunkArrayInGroups(arr, size) {
  // Break it up.
var aSize = Math.abs(arr.length/size);
 var myArr = new Array(size);
  var i = 0;
  var p = size;
  var cSize;
 
for(r = 0; r <= aSize; r++)
{
  if(r < aSize-1){
  myArr[r] = new Array(size);
  cSize = size;}
  else{
    myArr[r] = new Array(arr.length%size);
    cSize = arr.length%size;
  }
  
for(c = 0; c < cSize; c++)
{  
    
    myArr[r][c] = arr.slice(i,p);
    i =i + size;
    p =p + size;
}
 
 //return myArr;

}
alert(myArr.toString());
}

//alert(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
