console.time("test");
const transactionGrouping = require("../src/grouping");
const fs = require("fs");
let testObj;
let groupingData;
fs.readFile("./data/data.json","utf8",function(err,data){
          if(err){
                    console.errer(err);
          }else{
                    testObj=JSON.parse(data);
                    groupingData=transactionGrouping(testObj);
                    console.log("----------------------------------------------------------------");
                    console.log(groupingData,groupingData.length);
                    fs.writeFile("./data/operatGroup.json",JSON.stringify(groupingData),{encoding:"utf8",flag:"w"},function(err){
                              if(err){
                                        console.error(err);
                              }else{
                                        console.log(`grouping data number: ${testObj.length}
data group length: ${groupingData.length}`);
                                        console.timeEnd("test");
                              }
                    })
          }
})

