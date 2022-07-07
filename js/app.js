'use strict'

//define variables
const allUser=[];
const min=0;
const max=0;
// creat a constructor

function User(employeeID, fullName, departmentName , whichLevel, imageURL, muchSalary ){
this.employeeID=employeeID;
this.fullName=fullName;
this.departmentName=departmentName;
this.whichLevel=whichLevel;
this.imageURL=imageURL;
this.muchSalary;
allUser.push(this);
}
 

// create copies of the object(instances)
const Ghazi=new User("1000", "Ghazi Samer", "Administration","Senior","image",muchSalary(1500,2000);)
const Lana=new User("1001", "Lana Ali", "Finance","Senior","image",muchSalary(1500,2000););
const Tamara=new User("1002", "Tamara Ayoub", "Marketing","Senior","image",muchSalary(1500,2000));
const Safi=new User("1003", "Safi Walid", "Administration","MidSenior","image",muchSalary(1000,1500));
const Omar=new User("1004", "Omar Zaid", "Development","Senior","image",muchSalary(1500,2000));
const Rana=new User("1005", "Rana Saleh", "Development","Junior","image",muchSalary(500,1000));
const Hadi=new User("1006", "Hadi Ahmad", "Finance","Mid-Senior","image",muchSalary(1000,1500));

 document.write(Ghazi.fullName :(1-.075)*Ghazi.Salary(1500,2000);)  ;// here is the taxes percentage %

User.prototype.printUser=function(){
    console.log(`${this.fullName}}` )
}
document.write("Welcome to HR-management-system");
 
transverse();

//functions
function transverse (){
for (let i=0;i<allUser;i++){
    console.log(allUser[i]);
    allUser[i].printUser();
}

function muchSalary(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;

}*/
function muchSalary(min,max){
    Salary=Math.floor(Math.random()*(max-min+1))+min;
    return Math.floor(Math.random()*(max-min+1))+min;
}