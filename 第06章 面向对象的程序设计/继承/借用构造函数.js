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

var instance1 = new SubType("Bill", 22);
instance1.colors.push("black");

console.log(instance1.name);
console.log(instance1.age);
console.log(instance1.colors);

var instance2 = new SubType("Annie", 24);
console.log(instance2.name);
console.log(instance2.age);
console.log(instance2.colors);
console.log(instance2.sayName);

var super1 = new SuperType();
console.log(super1.sayName);

/*


优点: 1、原型链中有引用类型的属性时,该属性不会被所有实例所公用。
     2、在构造子类型的实例时,可以向超类的构造函数中传递参数

缺点: 1、使用构造函数就无法避免构造函数的问题(函数无法复用)。
     2、在超类原型中定义的方法,对子类型是不可见的(因为在子类型的实例中的[[prototype]]是指向子类的prototype的,在子类的实例中并没有指向超类prototype的指针,所以无法访问其方法)。
 */
