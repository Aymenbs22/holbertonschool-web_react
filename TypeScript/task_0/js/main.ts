interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

var student1: Student = {firstName: "Student", lastName: "Student", age: 28, location: "US"};
var student2: Student = {firstName: "Student2", lastName: "Student2", age: 28, location: "US"};
var studentsList: Student[] = [student1, student2];

var table = document.createElement('table');
var thead = document.createElement('thead');
var tbody = document.createElement('tbody');
document.body.appendChild(table);
table.appendChild(thead);
table.appendChild(table);



studentsList.forEach(function(data) {
    this.table = document.createElement('table');
    this.thead = this.table.createTHead();
    this.tbody = this.table.createTBody();
    var row = this.thead.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = this.firstName;
    cell2.innerHTML = this.location;
  });