/**
 * Created by Zhang on 16/8/9.
 */

function createAnother(original) {
    function object(o) {
        function F() {}
        F.prototype = o;
        return new F();
    }
    var clone = object(original);
    // var clone = Object.create(original);

    clone.sayName = function () {
        console.log(this.name);
    };

    return clone;
}

function Person(name, friends) {
    this.name = name;
    this.friends = friends;
}

var person = new Person("Bill", ["Annie", "Frank"]);

var anotherPerson = createAnother(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
anotherPerson.sayName(); // Greg

var anotherPerson1 = createAnother(person);
console.log(anotherPerson.sayName == anotherPerson1.sayName); // false

/*
 缺点: 1、与构造函数类似,无法避免构造函数的问题(函数无法复用,由于函数无法复用,也会在效率上有一些降低)。
 */
