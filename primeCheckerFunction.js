let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Following function takes integer and should return True if it's prime 
// otherwise  should return False.
function isPrime(inputNumber) {
    // You can start below this
    if (inputNumber <2) {
        return "False"
    }

//     let endValue = Math.floor(Math.sqrt(inputNumber))+1;
// console.log(endValue)
    for (let i = 2; i < inputNumber; i++) {
        if (inputNumber % i === 0) {

            return "False";
        }
    }

    return "True";
}


//Please don't change anything below this line.
let number = parseInt(readLine());
console.log(isPrime(number));