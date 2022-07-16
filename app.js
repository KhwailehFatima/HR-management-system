'use strict'

let staffCard=[] // array of instances

// creating a constractor to add the employees info
function Employees(employeeId,fullName,departmentName,level,imageUrl) {
    this.employeeId = employeeId;
    this.fullName = fullName;
    this.departmentName=departmentName;
    this.level = level;
    this.imageUrl= imageUrl;
    staffCard.push(this);
}

// calculating the salary depending on the employee level
// modifing the code to meet the best practices
Employees.prototype.salary = function() {
    (this.level.toLowerCase()==="senior") ? this.salary = getRndInteger (1500, 2008) :
        (this.level.toLowerCase()==="mid-senior") ? this.salary = getRndInteger(1000, 1500):
            this.salary =getRndInteger(500,1000);
            return this.salary
}

// calculating the net salary with a tax of 7.5%
Employees.prototype.netSalary = function() {
    this.netSalary=math.floor((this.salary * 0.075)+this.salary);
}

// creating the instances
const ghazi_Samer = new Employees(1000, "Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
const lana_Ali = new Employees(1001, "Lana Ali", "Finance", "Senior", "assets/Lana.jpg");
const tamara_Ayoub = new Employees(1002, "Tamara Ayoub", "Marketing", "Senior", "assets/Tamara.jpg");
const safi_Walid = new Employees(1003, "Safi Walid", "Administration", "Mid-Senior", "assets/Safi.jpg");
const omar_Zaid = new Employees(1004, "Omar Zaid", "Development", "Senior", "assets/Omar.jpg");
const rana_Saleh = new Employees(1005, "Rana Saleh", "Development", "Junior", "assets/Rana.jpg");
const hadi_Ahmad = new Employees(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "assets/Hadi.jpg");


staffCard.forEach(staffCard => {

    // creating the grand parent

    // creating the parent
    let cards=document.createElement("div");
    cards.setAttribute("class","card");

    // creating the child (img)
    let cardimg=document.createElement("img");
    cardimg.src=staffCard.imageUrl;
    cardimg.style="width:50%;";
    cardimg.alt=`${staffCard.fullName}`;

    // creating the child (div)
    let card=document.createElement("div");
    card.setAttribute("class","container");
    
    // rendering the required info
    let cardTitle=document.createElement("h4");
    cardTitle.textContent=`Name: ${staffCard.fullName}- ID: ${staffCard.employeeId}`;
    let cardText=document.createElement("p");
    cardText.textContent=`Department: ${staffCard.departmentName} - Level: ${staffCard.level}`;
    let cardSalary = document.createElement("p");
    cardSalary.textContent=`Salary: ${staffCard.salary()}`;

    // appending the child to the parent
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    card.appendChild(cardSalary);

    // appending the child to the parent
    cards.appendChild(cardimg);
    cards.appendChild(card);

    //  seperation algorithm
    (staffCard.departmentName==="Administration") ? document.getElementById("administration").appendChild(cards) : (staffCard.departmentName==="Finance") ? document.getElementById("finance").appendChild(cards) : (staffCard.departmentName==="Marketing") ? document.getElementById("marketing").appendChild(cards) : document.getElementById("development").appendChild(cards);
});
// Funcions:


// https://www.w3schools.com/js/js_random.asp
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}