// Add this class to your `greeter` code
var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// Now change our `user` so it becomes an object of our `Student` class
var user = new Student("Jane", "User");
document.body.innerHTML = greeter(user);
