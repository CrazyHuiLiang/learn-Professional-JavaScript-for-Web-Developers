/**
 * Created by Zhang on 16/8/8.
 */
function Person() {
    
}
Person.prototype.name = "bill";
Person.prototype.sayName = function () {
    console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.sayName();
person2.sayName();

console.log(person1.sayName == person2.sayName);

//获取实例的prototype
console.log(Object.getPrototypeOf(person1));

//查看person1是否含有指向Person.prototype的指针
console.log(Person.prototype.isPrototypeOf(person1));

//hasOwnPerperty:仅当name是实例属性时返回true。原型属性返回false
person1.name = "Bill";
console.log(person1.name);
console.log(person1.hasOwnProperty('name'));

delete person1.name;
console.log(person1.name);
console.log(person1.hasOwnProperty('name'));

//in 操作符: 无论属性是在prototype还是在实例上,只要有,就返回true
console.log("name" in person1);

// for in
for(var k in person1){
    console.log(k);
}


//获取可枚举的属性
var keys = Object.keys(person1);
console.log(keys);

var keys = Object.keys(Person.prototype);
console.log(keys);

//获取所有属性
var keys2 = Object.getOwnPropertyNames(Person.prototype);
console.log(keys2);




//更简单的原型语法
var Person2 = function () {

};
Person2.prototype = {
    // constructor: Person2,
    name: "bill",
    sayName:function () {
        console.info(this.name);
    }
};
/**
    通过直接设置Person2的prototype会影响constructor的指向,可以如上方代码手动设置constructor的值(如注释的代码),
 不过以这种方式重设constructor属性会导致他的[[Enumerable]]特性被设置为true。

 可以通过下面的方法来设置constructor,并将其设置为不可枚举。
 */

Object.defineProperty(Person2.prototype,"constructor",{
    enumerable: false,
    value:Person2
});






/**

 优点:

 没有对象识别的问题(即怎样知道一个对象的类型)

 不同实例中的同名函数可以是相等


 缺点:

 原型中如果有引用类型的属性,那么在一个实例中修改了该属性的值,有可能会引起所有实例中的该属性的值发生变化。
 */