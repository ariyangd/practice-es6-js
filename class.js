class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Pilot School';
    }
}

const student1 = new Student(12,'ariyan');
const student2 = new Student(22,'rehman');
const student3 = new Student(23,'razon');

console.log(student1.name, student2.name, student3.name);