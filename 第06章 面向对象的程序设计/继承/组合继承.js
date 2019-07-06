/**
 * Created by Zhang on 16/8/9.
 */

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {

    //继承 SuperType
    SuperType.call(this, name);

    this.age = age;
}
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
    console.log(this.age);
};


var instance1 = new SubType("Bill", 22);
instance1.colors.push("black");

instance1.sayName(); // Bill
instance1.sayAge(); // 22
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]

var instance2 = new SubType("Annie", 24);
instance2.sayName(); // Annie
instance2.sayAge(); // 24
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]

console.log(instance1 instanceof Object); // true
console.log(instance1 instanceof SuperType); // true
console.log(instance1 instanceof SubType); // true

console.log(Object.prototype.isPrototypeOf(instance1)); // true
console.log(SuperType.prototype.isPrototypeOf(instance1)); // true
console.log(SubType.prototype.isPrototypeOf(instance1)); // true


/*

优点: 1、避免了原型链和借用构造函数的缺陷,融合了他们的优点。成为JS中最常用的继承方式。

缺点: 1、调用了两次父类的构造函数,在子类的prototype上面创建了不必要的、多余的属性
 */
