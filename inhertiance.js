
// function person(name, age, gender, phoneNumber){
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.phoneNumber = phoneNumber;

    
//     this.printdetails = function(){
       
//         console.log(name)
//     }
     
// }

// function student(name,age,gender,phoneNumber,course){
//     person.call(this, name,age,gender,phoneNumber)
//     this.course=course
//     function sayhello(){
//         console.log("Hello")
//     }
//     this.printdetails = function(){
//           sayhello()
//         console.log(this.course)
//     }
   
// }

// function employee(name,age,gender,phoneNumber,companyName){
//     person.call(this,name,age,gender,phoneNumber)
//     this.companyName=companyName
//     // this.printdetails()
//     // this.printdetails()
//     this.printdetails = function(){
        
//         console.log(this.companyName)
//     }
   
    
// }

// let per = new student("pandu", "21", "Male", 9490151633,  "Accenture");
// console.log(per)

// let student1 ={
//     name : { 
//         firstName : "Pandu",
//         lastName : "JakkamSetti",
       

//     },
//     rollNumber : "17x05A0310",
//     age : 22
   
// }

// console.log(student1.age)

// let student2 ={
//     name : { 
//         firstName : "Mahesh",
//         lastName : "ch",
       

//     },
//     rollNumber : "1234567",
//     age : 22
   
// }

// console.log(student2)

function printdetails(f,l,r,a){
    return {
        name: { 
            firstName :f,
            lastName : l,

        },
        rollNumber: r,
        age: a
    }

}       
let stud = new printdetails("pandu","JakkamSetti","17X05A0310",22);
console.log(stud.age)