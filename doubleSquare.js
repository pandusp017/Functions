let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function doubleOrSquare(n) {
    if (n >= 0) {
        twice = n + n
        return twice
       
    }
    else if (n < 0) {
        sqr = n**2
        return sqr
        
        
    }

}

// -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
let n = parseInt(readLine());
console.log(doubleOrSquare(n));

// if (number > 0) {
//     twice = n+n
//  console.log(twice)
// }
// else if(number<0){
//     sqr = Math.pow(n,2)
//   return sqr
// }
