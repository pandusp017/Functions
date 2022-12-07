// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------

// Input:

// 5
// -1
// 4
// 2
// 3
// 1
// 1
// Output:
// 3
// 0
// 7
// 2

// Odd number n
// The first line contains 5 indicating 5 elements in the input array

// The next 5 lines contain the array elements: -1, 4, 2, 3, 1

// The last line contains 1 indicating one fold to be made

// The first and last element merge: -1 + 1 = 0

// The second and 4th element merge: 4 + 3 = 7

// The middle element is 2. It remains unchanged because of the fold

// So the result is 0, 7, 2

// let n= parseInt(readLine());//5
// let arr =[]                // [-1 , 4, 12,3, 1]
// for(let i=0; i<n; i++){ 
//      arr[i]= parseInt(readLine())
// }
// // console.log(arr)
// let fold = parseInt(readLine());  //1
// for(let i=0; i<fold; i++){  
//     let temp =[]; 
//     let start =0;
//     let end = arr.length-1
//     while(start<end){
//         temp.push(arr[start]+arr[end]); 
//         start++
//         end--
//     }
//     // console.log(temp)
//     if(arr.length%2!=0){
//         temp.push(arr[start])
//     }
//     arr=temp
//     // console.log(temp)
// }
// console.log(arr.length) //

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

let arr = [3,4,5,2,1,];

console.log(arr.sort((a,b)=>b-a));


