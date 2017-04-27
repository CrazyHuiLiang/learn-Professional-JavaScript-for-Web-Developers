/**
 * Created by Zhang on 16/8/8.
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friend = ["Annie", "Bill"];
}
Person.prototype = {
    constructor: Person,
    sayName: function () {
        console.log(this.name);
    }
};

var person1 = new Person("Bill", 21, null);
var person2 = new Person("Annie", 23, null);
person1.friend.push("frank");


console.log(person1.friend);
console.log(person2.friend);



/**

 优点:

 没有对象识别的问题(即怎样知道一个对象的类型)

 不同实例中的同名函数可以是相等

 避免了有引用类型的属性,在一个实例中修改了该属性的值,引起所有实例中的该属性的值发生变化。


 缺点:

 在书写上没有把prototype封装到构造函数中

 */