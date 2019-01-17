let arr1 = require("../data.json");
console.log(arr1);
function testTransactionGrouping(arr1){
          let arr = arr1.slice(0);
          let arrTest;
          let transactionGroup=[];
          let senderId ="";
          let senderGroup;
          let senderObj={};
          while(arr.length){
                    arrTest=arr.slice(0);
                    senderGroup=[];
                    senderId=arrTest[0].senderId;
                    for(let i=0;i<arrTest.length;i++){
                              if(senderId===arrTest[i].senderId){
                                        senderGroup.push(arrTest[i]);
                              }
                              if(senderId===arrTest[i].receiptId){
                                        senderGroup.push(arrTest[i]);                                
                              }
                              
                    };
                    senderObj[senderId]=senderGroup;
                    arr.splice(0,1);
          }
          console.log(senderObj);
          for(let item in senderObj){
                    transactionGroup.push(senderObj[item])
          }
          return transactionGroup;
}

console.log(JSON.stringify(testTransactionGrouping(arr1)));

// module.exports=testTransactionGrouping;