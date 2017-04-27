/**
 * Created by Zhang on 16/8/22.
 */

/*

特权方法:有权访问私有变量和私有函数的公有方法称为特权方法

*/


function Person(name) {
    this.setName = function (value) {
        name = value;
    };

    this.getName = function () {
        return name;
    };
}


var p1 = new Person("Bill");
console.log(p1.getName());
p1.setName("Annie");
console.log(p1.getName());



/*
    缺点:使用特权方法,就必须使用构造函数模式创建对象。而构造函数的缺点就是针对每个实例都会创建同样一组方法。

    可以使用静态私有变量来实现特权方法来避免这个问题。
*/


/*
通过私有作用域定义私有变量或函数
 */

// var MyObject;
(function () {

    //定义私有变量
    var name;


    Person = function () {
    };

    Person.prototype.setName = function (value) {
        name = value;
    };

    Person.prototype.getName = function () {
        return name;
    };
})();

var p1 = new Person();
p1.setName("Bill");
console.log(p1.getName());

var p2 = new Person();
console.log(p2.getName());

/*
这个模式与构造函数中定义特权方法的主要区别,就在于私有变量和函数是由所有实例共享的。由于特权方法是在原型上定义的,因此所有实例
都使用同一个函数,而这个特权方法作为一个闭包,总是保存着对包含作用域的引用。
在这种模式下,name就变成了一个静态的,由所有实例共享的属性。也就是说在一个实例上调用setName()会影响所有实例。而调用setName()
或新建一个Person实例都会赋予name属性一个新值结果就是所有实例都返回相同的值。

以这种方式创建的实例没有自己的私有变量。
 */


