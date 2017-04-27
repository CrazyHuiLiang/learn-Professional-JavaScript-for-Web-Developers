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

instance1.sayName();
instance1.sayAge();
console.log(instance1.colors);

var instance2 = new SubType("Annie", 24);
instance2.sayName();
instance2.sayAge();
console.log(instance2.colors);

console.log(instance1 instanceof Object);
console.log(instance1 instanceof SuperType);
console.log(instance1 instanceof SubType);

console.log(Object.prototype.isPrototypeOf(instance1));
console.log(SuperType.prototype.isPrototypeOf(instance1));
console.log(SubType.prototype.isPrototypeOf(instance1));


/*

优点: 1、避免了原型链和借用构造函数的缺陷,融合了他们的优点。成为JS中最常用的继承方式。

缺点: 1、调用了两次父类的构造函数,在子类的prototype上面创建了不必要的、多余的属性
 */
