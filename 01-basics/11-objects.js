const tinderUser = new Object()
tinderUser.id = 123
tinderUser.name = "Ayesha"
tinderUser.isLoggedin = true
console.log(tinderUser);

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        users_name : {
            firstname : "Ayesha",
            lastname : "Mazhar"

        }
    }
}
console.log(regularUser.fullname.users_name.lastname);

const object1 = {1 : "a" , 2 : "b"}
const object2 = {23: "a" , 4 : "b"}
//const object3 = Object.assign({}, object1,object2)
//console.log(object3);

const object3 ={...object1, ...object2}
console.log(object3);

const users=[
   {
    id: 1,
    email: "s@gamil.com"
   },
   {
    id: 2,
    email: "h@gamil.com"
   },
   {
    id: 3,
    email: "k@gamil.com"
   }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('Name'));

const course = {
    coursename: 'abc',
    price: 999,
    courseInstructor: 'xyz'
}
//course.courseInstructor

const {courseInstructor:instructor} = course
//console.log(courseInstructor);
console.log(instructor);

//API can be in the form of object or array//



