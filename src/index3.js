let arr = require("../data.json");
let operaArray = testTransactionGrouping(arr);
console.log(`operator array length: ${operaArray.length}`);
function testTransactionGrouping(arr){
          let transactionGroup=[];
          let smallGroup;
          let copyArr = arr.slice(0);
          while(copyArr.length){
                    smallGroup=[];
                    smallGroup.push(copyArr.splice(0,1)[0]);
                    for(let i=0;i<copyArr.length;i++){
                              if(smallGroup[0].senderId===copyArr[i].senderId){
                                        smallGroup.push(copyArr.splice(i,1)[0]);
                                        continue;
                              }
                              if(smallGroup[0].senderId===copyArr[i].receiptId){
                                        smallGroup.push(copyArr.splice(i,1)[0]);
                                        continue;
                              }
                    }
                    console.log(smallGroup);
                    transactionGroup.push(smallGroup);
          }
          return transactionGroup;
}
// console.log(JSON.stringify(testTransactionGrouping(arr)));
module.exports=testTransactionGrouping;

