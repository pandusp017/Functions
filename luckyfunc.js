let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
                                             //[0 1 2 3 4 ] index
function findLuckyNumber(nums) {             //[0 2 3 3 4 ] input arr
    // implement this function
    let count = 1                            //let count =1                     // count=2                
    for (let i = 1; i < nums.length; i++) { // i=1 i<4 i++                      //i=2 2<4 i++                 
        if (nums[i] == nums[i - 1]) {         // nums[1] == nums[1-1] > 2==1    // nums[2]==nums[2-1] > 3==2   
            count++                            //increment count                // increment count
        }
        else {
            if (count == nums[i - 1]) {    // 2==nums[2-1] > 2==2
                return nums[i - 1]         // return nums[2-1] > 2
            }
            count = 1
        }
    }

    if (count == nums[nums.length - 1]) {
        return nums[nums.length - 1]
    }
    return -1
}
// DO NOT change anything below this line
let numElems = parseInt(readLine());
let inputArr = []; //[2 2 3 3 4]
for (let index = 0; index < numElems; index++) {
    inputArr.push(parseInt(readLine()));
}
console.log(findLuckyNumber(inputArr));