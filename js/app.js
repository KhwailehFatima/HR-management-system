'use strict'

//define variables
const allUser=[];
 
// creat a constructor

function User(employeeID, fullName, departmentName , whichLevel, imageURL){

this.employeeID=employeeID;
this.fullName=fullName;
this.departmentName=departmentName;
this.whichLevel=whichLevel;
this.imageURL=imageURL;
allUser.push(this);
}
 //console.log(allUser)

// create copies of the object(instances)
const Ghazi=new User("1000", "Ghazi Samer", "Administration","Senior","")
const Lana=new User("1001", "Lana Ali", "Finance","Senior","");
const Tamara=new User("1002", "Tamara Ayoub", "Marketing","Senior","");
const Safi=new User("1003", "Safi Walid", "Administration","MidSenior","");
const Omar=new User("1004", "Omar Zaid", "Development","Senior","");
const Rana=new User("1005", "Rana Saleh", "Development","Junior","");
const Hadi=new User("1006", "Hadi Ahmad", "Finance","MidSenior","");

User.prototype.Salary=function(){

    if (this.whichLevel.toLowerCase()=="senior") {
       this.Salary= getRndInteger(1500,2000)
    }
     
    if (this.whichLevel.toLowerCase()=="midsenior") {
       this.Salary= getRndInteger(1000,1500)
    }
     
    if (this.whichLevel.toLowerCase()=="junior"){
        this.Salary=getRndInteger(500,1000)
    }
     
}

User.prototype.netSalary = function(){
    if (this.whichLevel.toLowerCase()==="senior") {
       this.netSalary= this.Salary*(1-0.075);
    }
    if (this.whichLevel.toLowerCase()==="midsenior"){
       this.netSalary= this.Salary*(1-0.075);
    }

    if (this.whichLevel.toLowerCase()==="junior"){
        this.netSalary=this.Salary*(1-0.075);
    }

}
 
User.prototype.printInfo = function(){
console.log(`Name: ${this.fullName} ,   Salary: ${this.Salary},   netSalary:${this.netSalary} `)
    document.write(`<p> <br><br> The salary for ${this.fullName} is ${this.Salary}JD, and the net salary is ${this.netSalary}JD </p>`)
}

//functions
 
for (let i=0;i<allUser.length;i++){
     
        console.log(i,allUser[i]);
        allUser[i].Salary();
        allUser[i].netSalary();
        allUser[i].printInfo();
    
}



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }