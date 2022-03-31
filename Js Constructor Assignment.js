console.log("Hello");

// Define the classes
class Student {
    constructor(name){
        this.name = name
    }
}

class School {
    constructor(name, students=[]){
        this.name = name
        this.students = students
    }
    //Methods/actions the school can perform
    getDetails(){
        return (`The name of the student is ${this.name}.`);
    }
    add(student){
        this.students.push(student)
    }
    
    remove(student){
        const index = this.students.indexOf(student)
        this.students.splice(index, 1)
    }
}
 // Making object with the help of the constructor
let s = new Student('Shola')
let v = new Student('Tope')
let p = new Student('Emmanuel')
let r = new Student('Daniel')
let g = new School(name='YCT')
g.add(s)
g.add(v)
g.add(p)
g.add(r)
console.log(g.students);
g.remove(s)
console.log(g.students);

        
    
  