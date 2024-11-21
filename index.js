
class books {
    title;
    author;
    isbn;
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
    CheckOut() {
        console.log(this.title, this.Author, this.isbn, "checked");
    }
    Returnbook() {
        console.log(this.title, this.author, this.isbn, "returned");
    }
    updateTitle(newTitle) {
        this.title = newTitle;
        console.log(this.title, "new title applied");
    }
}
var book = new books("I am Malala", "Malala Yousuf", "1908");
console.log(book);
book.CheckOut();
book.Returnbook();
book.updateTitle("akash");
console.log(book);

//2nd one

class product {
    price;
    name;
    category;
    constructor(price, name, category) {
        this.price = price;
        this.name = name;
        this.category = category;
    }
    applyDiscount(amount) {
        this.amount = amount;
        console.log(this.name, this.price, this.category, this.amount);
    }
    getPriceAfterDiscount() {
        console.log(this.name, this.price, this.category, this.price - this.amount)
    }
}

// 3rd one:

class bankac {
    acholder;
    acnumber;
    balance;
    constructor(acholder, acnumber, balance) {
        this.acholder = acholder;
        this.acnumber = acnumber;
        this.balance = balance;
    }
    deposit(amounti) {
        this.deposit = amounti;
        console.log(this.acholder, this.balance + this.deposit);
    }
    withdraw(amount) {
        this.withdraw = amount
        console.log(this.acholder, this.balance - this.withdraw);
    }
    //Check the current balance (e.g., getBalance() method)?
    getbalance() {
        console.log(this.acholder, "balance is :", this.balance + this.deposit - this.withdraw);
    }
}
var bankbal = new bankac("akash", "23456789", "20000");
console.log(bankbal);
bankbal.deposit(2000);
bankbal.withdraw(2500);
bankbal.getbalance();


//You are managing a fleet of vehicles. Each vehicle has a model, license plate, and mileage. You need to track the mileage whenever the vehicle is driven.
//•	Question:
//How would you define a Vehicle class with properties model, licensePlate, and mileage?
//–	What methods would you include to:
//•	Simulate driving the vehicle (e.g., drive(miles) method, which increases the mileage)?
//•	Get the current mileage of the vehicle (e.g., getMileage() method)?

class fleet {
    model;
    plate;
    milage;
    constructor(model, plate, milage) {
        this.model = model;
        this.plate = plate;
        this.milage = milage;
    }
    drive(miles) {
        this.drive = miles;
        console.log(this.model, this.drive);
    }
    getmileage() {
        console.log(this.model, "50kmph");
    }
}
var carmil = new fleet("akash", "23456789", "20");
console.log(carmil);
carmil.drive(500);
carmil.getmileage();
console.log(carmil);

//
//5. Scenario: School Grading System
//You are creating a grading system where each student has a name and a grade for a subject. Each student should be able to receive grades, and you want to create methods to update a student's grade. You also want to allow for the grading scale to change.
//-	Question:
//How would you define the Student class with properties like name and grade?
//o	What methods would you include in the Student class, such as setGrade(newGrade) to update the grade and getGrade() to retrieve it?
//o	How would you define the GradingScale class to allow for a method updateScale(newScale) to change the grading scale used for assigning grades?
//o	How would you create instances of Student and GradingScale, setting their properties and using the methods to update and get student grades?
//


class student {
    name;
    grade;
    constructor(name, grade) {
        this.name = name;
        this.grade = grade;
    }
    setgrade(newgrad) {
        console.log(this.grade, "grades are updated")
    }
    getgrade() {
        console.log(this.grade, "these are students current grades")
    }
}
var s1 = new student("sreya", "95");
s1.setgrade(95);
s1.getgrade();
console.log(s1);

var s2 = new student("nikhitha", "97");
s2.setgrade(97);
s2.getgrade();
console.log(s2);