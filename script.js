let student = {
    name : "John",
    age : 20,
    enrolled : true,
    courses : ["math","science","english"],
    displayStudent : function(){
        console.log("What is your age"+ this.age);
    }
};
console.log(student.name)
console.log(student.age);

let studentJSON = JSON.stringify(student); 
console.log(studentJSON);

let newStudent = JSON.parse (studentJSON);
console.log(newStudent);

let {name, courses} = student;
console.log(name, courses);

const scores = [85, 92, 78, 90];