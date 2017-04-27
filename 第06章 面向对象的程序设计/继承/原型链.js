/**
 * Created by Zhang on 16/8/9.
 */

function SuperType() {

    this.flag = true;
}

SuperType.prototype.getSuperValue = function () {
    return this.flag;
};



function SubType() {
    this.subflag = false;
}

//继承了 Super
SubType.prototype = new SuperType();

SubType.prototype .getSubValue = function () {
    return this.subflag;
};


var instance1 = new SubType();
console.log(instance1.getSuperValue());
console.log(instance1.getSubValue());


console.log(instance1 instanceof SubType);
console.log(instance1 instanceof SuperType);
console.log(instance1 instanceof Object);

console.log(Object.prototype.isPrototypeOf(instance1));
console.log(SuperType.prototype.isPrototypeOf(instance1));
console.log(SubType.prototype.isPrototypeOf(instance1));

console.log(instance1.constructor);


/*
缺点: 1、原型链中有引用类型的属性时,该属性会被所有实例所公用。
     2、在构造子类型的实例时,无法向超类的构造函数中传递参数
*/
