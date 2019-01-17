let arr = require("../data.json");
let operaArray = testTransactionGrouping(arr);
// console.log(`operator array length: ${operaArray.length}`);
function testTransactionGrouping(arr){
          let transactionGroup=[];
          let preGroup;
          let nextGroup;
          let receiptIdSet;
          let copyArr = arr.slice(0);
          let receiptId;
          while(copyArr.length!==18){
                    receiptIdSet = new Set()
                    preGroup=[];
                    preGroup.push(copyArr.splice(0,1)[0]);
                    
                    receiptId = preGroup[preGroup.length-1].receiptId;
                    receiptIdSet.add(receiptId);
                    console.log(`****************1*****************`);
                    console.log(preGroup,copyArr,receiptIdSet);

                    for(let i=0;i<2;i++){
                              for(let prop of receiptIdSet){
                                        if(copyArr[0].senderId===prop){
                                                  transactionGroup.push(preGroup);
                                                  break;
                                        }
                                        if(copyArr[0].senderId!==prop){
                                                  receiptIdSet.add(prop);
                                                  preGroup.push(copyArr.splice(0,1)[0]);
                                                  
                                        }
                              }
                    }
                    console.log(`****************4*****************`);
                    console.log(preGroup,copyArr,receiptIdSet);
                    
          }
          return transactionGroup;
}
// console.log(JSON.stringify(testTransactionGrouping(arr)));
// module.exports=testTransactionGrouping;

