'use strict'

//define variables
let allUser=[];
const eContainer = document.createElement("div");
 
 
// creat a constructor

function User(employeeID, fullName, departmentName , whichLevel, imageUrl){

this.employeeID=employeeID;
this.fullName=fullName;
this.departmentName=departmentName;
this.whichLevel=whichLevel;
this.imageURL=imageUrl;
allUser.push(this);
}
 //console.log(allUser)

// create copies of the object(instances)
const Ghazi=new User("1000", "Ghazi Samer", "Administration","Senior","/assets/Ghazi.jpg")
const Lana=new User("1001", "Lana Ali", "Finance","Senior","assets/Lana.jpg");
const Tamara=new User("1002", "Tamara Ayoub", "Marketing","Senior","assets/Tamara.jpg");
const Safi=new User("1003", "Safi Walid", "Administration","MidSenior","assets/Safi.jpg");
const Omar=new User("1004", "Omar Zaid", "Development","Senior","assets/Omar.jpg");
const Rana=new User("1005", "Rana Saleh", "Development","Junior","assets/Rana.jpg");
const Hadi=new User("1006", "Hadi Ahmad", "Finance","MidSenior","assets/Hadi.jpg");

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
 
/*User.prototype.printInfo = function(){
console.log(`Name: ${this.fullName} ,   Salary: ${this.Salary},   netSalary:${this.netSalary} `)
    document.write(`<p> <br><br> The salary for ${this.fullName} is ${this.Salary}JD, and the net salary is ${this.netSalary}JD </p>`)
}*/
//generate a unique id for each employee:
User.prototype.Id = function () {
    return Math.ceil(Math.random() * 1000)
}
// render the employee object to the DOM:
document.body.appendChild(eContainer);
eContainer.id="employee-container";
User.prototype.render = function () {
    // create employeeCard div inside the eContainer div:
    const eCard = document.createElement("div");
    eContainer.appendChild(eCard);
    eCard.className = "user-card"
    // [IMG] create employeeImgDiv div inside the employeeCard div:
    const eImgDiv = document.createElement("div");
    eCard.appendChild(eImgDiv);
    eImgDiv.className = "user-img-div"
    // [IMG] create employeeImg Img inside the employeeImgDiv div:
    const eImg = document.createElement("img");
    eImgDiv.appendChild(eImg);
    eImg.className = "user-img";
    eImg.src = this.imageUrl;
    // [TEXT] create employeeInfoDiv div inside the employeeCard div:
    const eInfoDiv = document.createElement("div");
    eCard.appendChild(eInfoDiv);
    eInfoDiv.className = "user-info-div"
    // [TEXT] create employeeNameandID div inside the employeeInfoDiv div:
    const eNameandID = document.createElement("p");
    eInfoDiv.appendChild(eNameandID);
    eNameandID.textContent = `Name: ${this.fullName} - ID: ${this.Id()}`;
    // [TEXT] create employeeDepartmentandLevel div inside the employeeInfoDiv div:
    const eDepartmentandLevel = document.createElement("p");
    eInfoDiv.appendChild(eDepartmentandLevel);
    eDepartmentandLevel.textContent = `Department: ${this.department} - Level: ${this.level}`;
    // [TEXT] create employeeSalary div inside the employeeInfoDiv div:
    const eSalary = document.createElement("p");
    eInfoDiv.appendChild(eSalary);
    eSalary.textContent = `Salary: ${this.Salary()}`;
}

function renderAllEmployees() {
    for (let i = 0; i < allUser.length; i++) {
        allUser[i].render();
    }
}
//functions
 /*
for (let i=0;i<allUser.length;i++){
     
        console.log(i,allUser[i]);
        allUser[i].Salary();
        allUser[i].netSalary();
        allUser[i].printInfo();
    
}
*/


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  renderAllEmployees()