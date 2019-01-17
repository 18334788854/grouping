let arr = require("../data.json");
testTransactionGrouping(arr);
function testTransactionGrouping(arr){
          let id="";
          let handleArray=arr.slice(0);
          let handleObj={};
          let opObj={};
          let indexArray=[];
          let transactionGroup=[];
          for(let item of handleArray){
                    handleObj[item.index]=item;
          }
          console.log(handleObj);
          let obj;
          while(indexArray.length<4){
                    
                    if(obj){
                             
                    }else{
                              id=handleArray[0].senderId;
                    }
                    // opObj[id]=[];
                    for(let item of handleArray){
                              if(id===item.senderId){
                                        // opObj[id].push(item.senderId);
                                        indexArray.push(item.index);
                              }
                              if(id===item.receiptId){
                                        // opObj[id].push(item.receiptId);
                                        indexArray.push(item.index);
                              }
                    }
                    let pushArray=[];
                    for(let index of indexArray){
                              console.log(index);
                              for(let prop in handleObj){
                                        if(index in handleObj){
                                                  pushArray.push(handleObj[index]);    
                                        }else{
                                                  obj[prop]=handleObj[prop];
                                        }
                              }
                    }
                    console.log(pushArray);
                    transactionGroup.push(pushArray);
                    
          }
          return transactionGroup;


          // let id="";
          // let handleObj={}
          // let indexArray =[];
          // let handleArray = arr.slice(0);
          // while(handleArray.length){
          //           id=handleArray[0].senderId;
          //           handleObj[id]=[];
          //           for(let item of handleArray){
          //                     if(id===item.senderId){
          //                               handleObj[id].push(item.senderId);
          //                               indexArray.push(item.index);
          //                     }
          //                     if(id===item.receiptId){
          //                               handleObj[id].push(item.receiptId);
          //                               indexArray.push(item.index);
          //                     }
          //           }
          // }
}
// console.log(JSON.stringify(testTransactionGrouping(arr)));
// module.exports=testTransactionGrouping;