/**
 * Created by Zhang on 16/8/8.
 */
function Person(name, age, job) {
    //属性
    this.name = name;
    this.age = age;
    this.job = job;


    //检查一个初始化后应该存在的任何属性或方法,从而避免多次重写Person.prototype
    if (typeof this.sayName != "function"){

        Person.prototype.sayName = function () {
            console.log(this.name);
        };

        Person.prototype.sayAge = function () {
            console.log(this.age);
        };

        Person.prototype.sayJob = function () {
            console.log(this.job);
        }
    }
}


var person1 = new Person("Bill", 21, "programmer");
var person2 = new Person("Annie", 23, "teacher");

person1.sayName();
person2.sayName();

// console.info(person1.sayName == person2.sayName);
// console.info(person1.sayAge == person2.sayAge);
// console.info(person1.sayJob == person2.sayJob);


/**

 优点:

 没有对象识别的问题(即怎样知道一个对象的类型)

 不同实例中的同名函数可以是相等

 避免了有引用类型的属性,在一个实例中修改了该属性的值,引起所有实例中的该属性的值发生变化。

 在书写上可以把prototype封装到构造函数中,封装更完美

 */