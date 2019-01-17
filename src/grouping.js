// const arr = require("../data/data.json");
// const fs = require("fs");
// console.time("test");
// console.log(arr);
// let operaArray = testTransactionGrouping(arr);
// console.log(operaArray);
// console.log(`OperaArray's length: ${operaArray.length}`);
// fs.writeFile("./data/operatGroup.json",JSON.stringify(operaArray),"utf8",function(err){
//           if(err){
//                     console.error(err);
//           }else{
//                     console.log(`Grouping success!`);
//                     console.timeEnd("test");
//           }
// });

module.exports = function testTransactionGrouping(arr){
          let transactionGroup=[];
          let i=0;
          let storeSet = new Set();
          let smallGroup=[];
          let _lock = false;

          while(i<arr.length){
                    // console.log(`******************${i}********************`);
                    smallGroup.push(arr[i]);
                    storeSet.add(arr[i].receiptId);
                    i++;
                    _lock=false;
                    // console.log(storeSet.has(arr[i].senderId));
                    if(arr[i]){
                              if(storeSet.has(arr[i].senderId)){
                                        _lock=true;
                              }else{
                                        _lock=false;
                              }
                    }
                   
                    if(_lock){
                              transactionGroup.push(smallGroup);
                              smallGroup=[];
                              storeSet.clear();
                              // i--;
                    }else{
                              // smallGroup.push(arr[i]);
                              // storeSet.add(arr[i].receiptId);
                              if(i===arr.length){
                                        // smallGroup.push(arr[i]);
                                        transactionGroup.push(smallGroup);
                              }
                    }
          }
          return transactionGroup;
}
// console.log(JSON.stringify(testTransactionGrouping(arr)));

