let count=0;
let fse = require("fs-extra");
const LETTER="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUM="0123456789";
const path = require("path");
function generator(){
          let letter=LETTER[Math.floor(Math.random()*LETTER.length)];
          let num=NUM[Math.floor(Math.random()*NUM.length)];
          while(letter===num){
                    num=NUM[Math.floor(Math.random()*NUM.length)];
          }
          return letter+num;
}
let arr=[];
// const len = process.argv[2]||100000;
async function createDatasAsync(){
          do{
                    arr[arr.length]={senderId:generator(),receiptId:generator(),amout:30/**Math.floor(Math.random()*30) */,index:count};
                    count++;
                    if(arr.length===10000){
                              await saveDatasToFileAsync();
                              // console.log(`${arr.length}`);
                    }                     
          }while(count<20000)
}
async function saveDatasToFileAsync(){
          const filename = path.resolve(__dirname,`../data/${count}.json`);
          // console.log(`${arr.length}`);
          await fse.writeJson(filename,arr,{
                    spaces:4
          })
          .then(()=>console.log(`write data successful : ${filename}`))
          .catch(err=>console.error(err));
          arr=[];
}

( async function(){
          await createDatasAsync();
          process.exit();
})();