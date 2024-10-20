//primmitive and object type

//primmitive type 
//1.number 2.string 3.boolean 4.null 5.undefine 6.symbol 7.bigInt
//object type
///1.object ,2.array 3.fuction 4.date 5.regExp 6.error // key value pair

//primitive
 
let name = 'sanchit'
const id = 123
let isStudent = true

// console.log(typeof name);
// console.log(typeof id);
// console.log(typeof isStudent);

//object
const user ={
    Name : 'sanit',
    id : 123,
    email : 's@gmail.com'
}
/*** 
// console.log(typeof user);
// console.log(user);
// console.log(user.Name = 'Sanchit');
// console.log(user);
// console.log(user.id);
***/

const array = [1,2,4,5,6,7,8]
// console.log(typeof array);

const student = {
    name : {
        firstName : 'abhay',
        lastName : 'singh',
    },
    age : 20,
    course : ' B Sc',
    CGPA : 8
}
console.log(student);
console.log(student.name.firstName);
