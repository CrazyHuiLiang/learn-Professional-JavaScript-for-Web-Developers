/**
 * Created by Zhang on 16/8/9.
 */

function inheritPrototype(subType, superType) {
    var prototype = Object(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

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

inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

var instance1 = new SubType("Bill", 22);
instance1.colors.push("black");

instance1.sayName(); // Bill
instance1.sayAge(); // 22
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]


/*
 优点: 1、避免了调用了两次父类的构造函数,在子类的prototype上面创建了不必要的、多余的属性
 */
