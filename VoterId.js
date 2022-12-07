let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

let VoterId = parseInt(readLine());

let KVM_School = [2345,1434,0123,4567,8901,3456]
let MB_School =  [4543,5455,6754,2554,6564,2556]
let GovtSchool = [2323,4334,5452,5144,6425,1234]

function Votes (id, schools){
    for(let i=0; i<schools.length; i++){
        if(id==schools[i]){
            return true;
        }
    }
    return false
}

if(Votes(VoterId,KVM_School)){
    console.log("KVM SCHOOL")
}else if(Votes(VoterId,MB_School)){
     console.log("MB SCHOOL")
}else if(Votes(VoterId, GovtSchool)){
    console.log("GOVT SCHOOL")
}else{
    console.log("NOT FOUND")
}
