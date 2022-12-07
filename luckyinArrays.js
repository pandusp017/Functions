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
//[2 2 3 3 4 ] input arr
let numElems = parseInt(readLine());
let nums = []; //[2 2 3 3 4]
for (let index = 0; index < numElems; index++) {
    nums.push(parseInt(readLine()));
}

let count = 1                           //Count =1      //count=2
for (let i = 1; i < nums.length; i++){  //i=1;1<5; i++   i=2;2<5
    if (nums[i] == nums[i - 1]) {       // 2==2           3==2 false
        count++
    }
    else {
        if (count == nums[i - 1]) {  // 1==2 false
            console.log(nums[i - 1]) 
        }
        count = 1    //  1==1 
    }
}

if (count == nums[nums.length - 1]) {   //1==4
    console.log(nums[nums.length - 1])
}

// DO NOT change anything below this line
