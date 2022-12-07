// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// Divisibility test
// let arr = readLine().split(" ");
// let  n = parseInt(arr[0]);
// let x = parseInt(arr[1]);
// let count =0
// let arr1 = readLine().split(" ");
// for(let i=0; i<=n; i++){
//     if(arr1[i]%x===0){
//         count=count+1
//     }
// }
// console.log(count)

//matrix diagnol

// let n = parseInt(readLine());
// let arr = [];
// for(let i=0; i<n; i++){
//     let x = readLine().split(" ").map(x=>parseInt(x))
//     arr.push(x)
// }
// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(i===j){
//             if(arr[i][j]<0){
//                 arr[i][j]=0
//             }else if(arr[i][j]>=0){
//                 arr[i][j]=1
//             }

//         }
//     }
// }
// console.log(arr)

// for(let i=0; i<arr.length; i++){
//     console.log(...arr[i])
// }

//Transpose Matrix

// let n = parseInt(readLine());
// let arr = [];
// for(let i=0; i<n; i++){
//     let x = readLine().split(" ").map(x=>parseInt(x))
//     arr.push(x)
// }
// console.log(arr)

// let Transpose=[]
// for(let i=0; i<arr[0].length; i++){
//     let subarr =[];
//     for(let j=0; j<arr.length; j++){
//         subarr.push(arr[j][i])
//     }
//    Transpose.push(subarr)
// }
// console.log(Transpose)

// for(let i=0; i<arr.length; i++){
//     console.log(...Transpose[i])
// }

//Shuffle array

// let n = parseInt(readLine());
// let arr1=[];
// for(let i=0; i<n; i++){
//     let x1 = parseInt(readLine())
//     arr1.push(x1)
// }
// console.log(arr1)

// let arr2=[];
// for(let i=0; i<n; i++){
//     let x2 = parseInt(readLine())
//     arr2.push(x2)
// }
// console.log(arr2)

// for(let i=0; i<n; i++){
//     console.log(arr1[i])
//     console.log(arr2[i])
// }

//Count Negative NUmbers

// let n = parseInt(readLine());
// let arr = readLine().split(" ")
// let count =0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         count=count+1
//     }
// }
// console.log(count);

// Alterante 101

// let n = parseInt(readLine());
// let arr = readLine().split(" ");
// let sum = 0
// for (let i = 0; i < n; i = i + 2) {
//     sum += parseInt(arr[i])
   
// }
// console.log(sum);

//ROTATE ARRAY clockwise

// let arr= readLine().split(" ");
// let m = parseInt(readLine());

// for(let i=0; i<m; i++){
//     let temp = arr.pop();
//     arr.unshift(temp)
   
// }
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
//}

let arr = [9,3,5,7,5,8,2,6];
let sum =10;
//output = [3,7]

// let first = arr[0];
let arr1 =[]
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j]===sum){
            arr1.push(arr[i],arr[j])
                break;
            //  console.log(arr[i]+arr[j])
             
        }
    }
    
}
console.log(arr1)