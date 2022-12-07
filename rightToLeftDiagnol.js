let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// name your function as rightToLeftDiagonal
function rightToLeftDiagonal(matrix) {

  let arr = []
  for (let i = 0; i < matrix.length; i++) {
    arr.push(matrix[i][matrix.length - i - 1])  //[0][4-0-1]= [0][3]
                                                 // [1][4-1-1]= [1][2]
  }                                               // [2][4-2-1]=[2][1]
  return arr                                      //[3][4-3-1]=[3][0]
}

// Do not change anything below this line
let m = parseInt(readLine());
let matrix = [];
for (let row = 0; row < m; row++) {
  let rowElements = readLine().split(" ");
  matrix.push(rowElements);
}
let result = rightToLeftDiagonal(matrix);
for (element of result) {
  console.log(element);
}