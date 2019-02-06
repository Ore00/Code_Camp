/* 
 * Copyright (C) 2018 Websani - RIMS - Linda
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
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.
 */
function checkCashRegister(price, cash, cid) {
  var change;     // Here is your change, ma'am.
  let remainingCID = cid; 
  let currencyNumber = [['ONE HUNDRED' ,  100], ['TWENTY', 20],  ['TEN', 10], ['FIVE', 5], ['ONE', 1], ['QUARTER', .25], ['DIME', .10], ['NICKEL', .05], ['PENNY' , .01]];
     
  let register = {
      registerStatus: function(status = ""){        
          if(status === ""){
          return this.changeNeeded() === this.availableCID(cid) ? "CLOSED" : ( this.changeNeeded() > this.availableCID(cid) ? "INSUFFICIENT_FUNDS" :  "OPEN");    
      }else{
              return status;
          }
          },  
      changeNeeded: function(){
      return parseFloat(cash) - parseFloat(price); 
     },
     availableCID: function(arr){     
         let newArr = [];
         var arrLength = arr.length;
         for(let i = 0; i < arrLength; i++){   newArr.push(arr[i][1]); }
         const sumIt = (accumlator, current) => accumlator + Number(current);       
         return newArr.reduce(sumIt);
     },
     setRemainingCIDAmount: function(currency, amt, isAdd = false){     
        var setAmount = false;        
        remainingCID.filter(function(obj, index) {  
            if(obj[0] === currency ){
                //update cashDrawer             
                    if( remainingCID[index][1] >= amt){
                        var temp = isAdd === false ? remainingCID[index][1] - amt :  remainingCID[index][1] + amt ;
                       remainingCID[index][1] = temp.toFixed(2);  
                       setAmount = true;
                    }          
            };           
        });           
        return setAmount;         
     },
     getRemainingCID:function(){
         return remainingCID;
     },
    getIndex: function(array, currency){
            let myArr = new Array;           
            myArr = array;
            return  myArr.findIndex(i => i[0] === currency);           
         },
    setCurrency: function(array, currency, amount){
          let index = this.getIndex(array, currency);          
          if(index !== -1){   
              array[index][1] =  array[index][1] + amount;
               }
    },     
     currencyAvailable: function(currency){           
        let remainingAmount  = remainingCID.filter(function(obj) {   return( obj[0] === currency);    });
        return remainingAmount[0][1];
     },
     nextCurrency: function(lastCurrency){
        //determine the currency to us based on the previous currency (lastCurrency) 
         let currencyOrder = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY' ];  
         let  lastID = currencyOrder.indexOf(lastCurrency);
         let nextID = lastID + 1;
         let nextItem = lastID === currencyOrder.length - 1 ?  -1 : nextID;        
         return currencyOrder[nextItem];
     },
     currentCurrency: function(balance){
         //determine which currency group is needed based on the balance
          var group; 
         switch(true){
                case  (balance >= 100):
                    group = "ONE HUNDRED";                    
                    break;
                case (balance < 100 && balance >= 20):
                    group = "TWENTY";                  
                    break;
                case (balance < 20 && balance >= 10):
                    group = "TEN";                   
                    break;
                case (balance < 10 && balance >= 5): 
                    group = "FIVE";                    
                    break;
                case (balance < 5 && balance >= 1):
                    group = "ONE";                   
                    break;
                case (balance < 1 || balance >= .25):              
                    group = "QUARTER";                   
                    break;
                case(balance < .25 && balance >= .10):
                    group = "DIME";                   
                    break;
               case(balance < .10 && balance >= .01):
                   group = "PENNY";                  
              break;
            }           
            return group;
     },
     makeChange: function(){
        var noChange = [];  
        var arrayChange = new Array;        
        if(this.registerStatus()  === "OPEN"){
          let bal = this.changeNeeded();
          let startingCurrency =   this.currentCurrency(bal); 
          this.getMoney(bal, startingCurrency, arrayChange);                  
          }
                return this.registerStatus() === "CLOSED" ? cid : (this.registerStatus() === "INSUFFICIENT_FUNDS" ? noChange : arrayChange);
     },
     currencyAdjustment(amountNeeded, currency){          
         var actualCurrency = currencyNumber[register.getIndex(currencyNumber, currency)][1];
         var availableCurrency = this.currencyAvailable(currency);
         var actualAmount = amountNeeded > availableCurrency ? availableCurrency : amountNeeded;
         var numberOfCurrency = Math.floor(actualAmount/actualCurrency);
         var amountReturn = numberOfCurrency * actualCurrency;
          return amountReturn;
     },
     getMoney:function(balance, currency, arrayChange){
        var amount, cents, dollars = 0;
        var getCents = balance < 1 ? true : false;        
        cents = parseFloat(balance.toString().substring(balance.toString().indexOf("."), balance.length));        
        dollars =   parseInt(balance.toString().substring(0, balance.toString().indexOf(".")));       
        var getAmount = getCents !== true ? dollars : cents.toFixed(2);        
         amount = this.currencyAdjustment(getAmount, currency);
         //add to currency item or add new currency item
         if(amount > 0)
         this.getIndex(arrayChange, currency) === -1 ? arrayChange.push([currency,  amount]) : this.setCurrency(arrayChange, currency, amount);
        
         this.setRemainingCIDAmount( currency, amount);
         balance = balance - amount;
                   
           currency = balance/currencyNumber[register.getIndex(currencyNumber, currency)][1]  !== 0 ? this.nextCurrency(currency) : this.currentCurrency(balance);
         if(currency === undefined){
             return  arrayChange;}
         //if balance exist run the process again checking the next currency to get the remaining balance         
         if(balance.toFixed(2) > 0){           
             this.getMoney(balance, currency, arrayChange);
         }else{            
               return arrayChange;
         }         
     }    
  };
   
  change = new Object(); 
  var arrayChange = register.makeChange();
  var arrayLength = arrayChange.length;
  var status = register.registerStatus();
  change.status = (status === "OPEN" && arrayLength === 0)? "INSUFFICIENT_FUNDS" : status;  
  change.change = arrayChange;  
  
    return change;
}
//Case Make Change - need make change function complete
let result = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(result);

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

//Case Insufficient Fund - done
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

//Case Closed - done
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
