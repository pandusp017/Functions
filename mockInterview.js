let arr = [9,3,5,7,5,8,2,6];
let sum =10;
//output = [3,7]

// let first = arr[0];
for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j]===sum){
             console.log(arr[i]+arr[j])
        }
    }
    
}


