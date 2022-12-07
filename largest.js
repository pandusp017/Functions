// // let A = 5
// let arr = [1, 8, 7, 56, 90]
// let large = arr[0]
// for (let i = 1; i < arr.length; i++) {

//     if (large <arr[i]) {
//         large = arr[i]
//     }
// }
// console.log(large)

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function largestElement(A){
    //Code here
    let large = A[0]
for (let i = 1; i < A.length; i++) {

    if (large < A[i]) {
        large = A[i]
    }
}
return large
}
// --------- Do NOT edit Below this line -----------
function ConvertToNumber(list){
  for(let each in list){
      list[each]=Number(list[each]);
  } 
}

let n = parseInt(readLine());
let A=readLine().split(" ");
ConvertToNumber(A);
console.log(largestElement(A));

