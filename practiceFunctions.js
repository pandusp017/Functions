let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// // -------- Do NOT edit anything above this line ----------
//PRIME CHECKER FUNCTION
// // Following function takes integer and should return True if it's prime 
// // otherwise  should return False.
// function isPrime(inputNumber) {
// 	 // You can start below this
//     if(inputNumber<2){
//         return "False"
//     }
//     for(let i=2; i<inputNumber; i++){
//         if(inputNumber%i===0){
//             return "False"
//         }

//     }
//     return "True"
// }




// //Please don't change anything below this line.
// let number = parseInt(readLine());
// console.log(isPrime(number));

//EMERGENCY CESS

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// function calculateTotalFund(salaries, peopleCount){
//    let sum =0;
//     for(let i=0; i<peopleCount; i++){
//       sum = sum+ Math.ceil((7*salaries[i])/100)
//     }
//     return sum
// }

// function ConvertToNumber(list){
//     for(let each in list){
//         list[each]=Number(list[each])
//     }
// }

// let peopleCount = parseInt(readLine());
// let salaries = readLine().split(" ");
// ConvertToNumber(salaries);
// let totalFund = calculateTotalFund(salaries, peopleCount);
// console.log(totalFund);

//Double Square
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// // -------- Do NOT edit anything above this line ----------

// // Fill in the following function.
// // Please do not change the function name.
// function doubleOrSquare(n) {
//       if(n>=0){
//         pos = n+n
//         return pos
//       }else if (n<=0){
//         neg = parseInt(n**2)
//         return neg
//       }

// }

// // -------- DO NOT CHANGE ANYTHING BELOW THIS LINE --------
// let n = parseInt(readLine());
// console.log(doubleOrSquare(n));

//FACTORIAL ITERATIVE
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// function factorial(number) {
//     // write your code here
//     if (number < 0) {
//         return "undefined"
//     }
//     if (number == 0) {
//         return 1
//     }
//     let sum = 1
//     for (let i = 1; i <=number; i++) {
//         sum = sum * i
//     }

//     return sum

// }



// let number = parseInt(readLine());

// console.log(factorial(number));

//LARGEST 
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
// 	idx++;
// 	return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------

// function largestElement(A) {
// 	// Code here
// 	let large = A[0]
//     for(let i=1; i<n; i++){
//         if(large<A[i]){
//             large = A[i]

//         }

//     }
//     return large
// }

// // --------- Do NOT edit Below this line -----------
// function ConvertToNumber(list) {
// 	for (let each in list) {
// 		list[each] = Number(list[each]);
// 	}
// }

// let n = parseInt(readLine());
// let A = readLine().split(" ");
// ConvertToNumber(A);
// console.log(largestElement(A));

//RIGHT TO LEFT DIAGNOL

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------

// // name your function as rightToLeftDiagonal
// function rightToLeftDiagonal(matrix) {
//    let arr =[]
//  for(let i=0; i<matrix.length; i++){
//     arr.push(matrix[i][matrix.length-i-1])
//  }
//  return arr
// }


// // Do not change anything below this line
// let m = parseInt(readLine());
// let matrix = [];
// for (let row = 0; row < m; row++) {
//   let rowElements = readLine().split(" ");
//   matrix.push(rowElements);
// }
// let result = rightToLeftDiagonal(matrix);
// for (element of result) {
//   console.log(element);
// }

//Brick Volume
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }



// // -------- Do NOT edit anything above this line ----------

// // You should fill this functions using the volume and calculatePrice functions defined below this.
// // dimensions is a list with 2 values width and height respectively
// // brickCount is int representing total bricks
// function calculateTotalPriceOfBricks(dimensions, brickCount){
//      let length = 100;
//      let width = dimensions[0];
//      let height = dimensions[1]
// // width = 60
// if(width===-1){
//     width =60
// }if(height===-1){
//     height=40
// }
//     let sxd = volume(length,width,height)
//      cp = sxd*brickCount;
//      tp = calculatePrice(cp)
//      return tp
// }





// // Do not change anything below this line
// function volume(length=100,width=60,height=40){
//   return length*width*height;
// }

// function calculatePrice(volume, price=0.00005){
// 	return Math.floor(volume*price);
// }
// function ConvertToNumber(list){
//     for(let each in list){
//         list[each]=Number(list[each]);
//     }
    
// }

// let brickCount = parseInt(readLine());
// dimensions = readLine().split(" ");
// ConvertToNumber(dimensions);
// totalPrice = calculateTotalPriceOfBricks(dimensions, brickCount);
// console.log(totalPrice);  

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
//FOLD ARRAY
// let n=parseInt(readLine());
// let array=[];
// for(i=0;i<n;i++){
//     array[i]=parseInt(readLine());
// }
// let fold=parseInt(readLine());
// for(let i=0;i<fold;i++){
//     let temp=[];
//     let start=0;
//     let end=array.length-1;
//      while(start<end){
//           temp.push(array[start]+array[end]);
//           start++;
//           end--;
//       }
//     if(array.length%2!=0){ 
//         temp.push(array[start]);
//     }
//     array=temp;
// }
// console.log(array.length);
// for(i=0;i<array.length;i++){
//     console.log(array[i]); 
// }

//LUCKY NUMBER

// let m = parseInt(readLine());
// let obj ={}
// for (let i=0; i<m; i++){
//     let x =parseInt(readLine());
//     if(x in obj){
//         obj[x]=obj[x]+1
//     }else{
//         obj[x]=1
//     }
// }
// let result = -1
// for(const key in obj){
//     if(obj[key]==key){
//         result = key;
//         break;
//     }
// }
// console.log(result)

//Image icon match
// let m = parseInt(readLine())
// let fir = []
// for (i = 0; i < m; i++) {
//     fir[i] = parseInt(readLine())
// }
// let n = parseInt(readLine())
// let sec = []
// for (i = 0; i < n; i++) {
//     sec[i] = parseInt(readLine())
// }
// let count = 0
// for (let i = 0; i < m; i++) {
//     if (fir[i] != sec[0]) {
//         continue
//     }
//     else {
//         if (i + n <= m) {
//             let k = i
//             for (let j = 0; j < n; j++) {
//                 if (fir[k] != sec[j]) {
//                     break
//                 }
//                 k++
//                 if (j == n - 1) {
//                     count = count + 1
//                 }
//             }
//         }
//     }
// }
// console.log(count)


// let m = parseInt(readLine());

// let obj ={};
// for(let i=0; i<m; i++){
//     let x = parseInt(readLine());
//     if(x in obj){
//         obj[x]=obj[x]+1
//     }else{
//         obj[x]=1
//     }
// }
// let result = -1
// for(const key in obj){
//     if(obj[key]==key){
//         result = key 
//         break;
//     }
// }
// console.log(result)

let m = parseInt(readLine());
let fir = [];
for(let i=0; i<m; i++){
    fir[i]=parseInt(readLine())
}
console.log(fir)

let n = parseInt(readLine());
let sec = []
for(let i=0; i<n; i++){
    sec[i]=parseInt(readLine())
}
console.log(sec)
let count =0;
for(let i=0; i<m; i++){
    if(fir[i]!=sec[0]){
        continue
    }else{
        if(i+n<=m){
            let k=i
            for(let j=0; j<n; j++){
                if(fir[k]!=sec[j]){
                    break;
                }
                k++
                if(j==n-1){
                    count=count+1
                }
            }
        }
    }
}
console.log(count)