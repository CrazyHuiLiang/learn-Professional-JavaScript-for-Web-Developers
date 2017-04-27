/**
 * Created by Zhang on 16/8/8.
 */
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function () {
        console.info(this.name);
    }
}


var person1 = new Person("Bill", 21, "Programer");
var person2 = new Person("Annie", 23, "teacher");


person1.sayName();
person2.sayName();

//对象标示符
console.log(person1.constructor == Person);
console.log(person2.constructor == Person);

//检验是否是Person的实例
console.log(person1 instanceof Person);
console.log(person2 instanceof Person);


/**

 创建Person的新实例,必须使用new操作符。以这种方式调用构造函数实际上会经历以下4个步骤:

 1、创建一个新对象
 2、将构造函数的作用域赋给新对象(因此this就指向这个新对象)
 3、执行构造函数中的代码(为这个对象添加属性)
 4、返回新对象

 */

/**

 优点:
 没有对象识别的问题(即怎样知道一个对象的类型)


 缺点:
 因为,JS中函数也是对象,因此不同实例上的同名函数是不相等的。
 这并不符合面向对象的特征。
 */
console.log(person1.sayName == person2.sayName);