const fs = require("fs");
const LETTER="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM="0123456789";
function generator(){
          let letter=LETTER[Math.floor(Math.random()*LETTER.length)];
          let num=NUM[Math.floor(Math.random()*NUM.length)];
          while(letter===num){
                    num=NUM[Math.floor(Math.random()*NUM.length)];
          }
          return letter+num;
}
const  generateNumber= process.argv[2]||10;
let arr=[];
let obj;
for(let i=0;i<generateNumber;i++){
        obj={senderId:generator(),receiptId:generator(),amout:30/**Math.floor(Math.random()*30) */,index:i};
        arr.push(obj);  
}

fs.writeFile("./data/data.json",JSON.stringify(arr),{encoding:"utf8",flag:"w"},function(err){
          if(err){
                    console.error(err);
          }else{
                    console.log(`data.json创建成功.`);
          }
})

module.exports=arr;

