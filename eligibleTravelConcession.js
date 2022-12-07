let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());

function solve(){
    let read = readLine().split(" ");
    let age = parseInt(read[0]);
    let gender = read[1]
   
    if((age >60 && gender==="M") || (age>58 && gender==="F")){
              console.log("Eligible")
    }else{
        console.log("Not Eligible")
    }
}
for(let i=0; i<n; i++){
  solve();
}