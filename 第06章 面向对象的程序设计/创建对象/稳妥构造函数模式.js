/**
 * Created by Zhang on 16/8/8.
 */



/**
 所谓稳妥对象,指的是没有公共属性,而且其方法也不引用this的对象。

 稳妥对象最适合在一些安全的环境中(这些环境中会禁止使用this和new),或者在防止数据被其他应用程序(如Mashup程序)改动时使用。

 稳妥构造函数遵循与寄生构造函数类似的模式,但有两点不同:
     创建对象的实例方法不引用this;
     不使用new操作符调用构造函数;
 */

function Person(name, age, job) {

    //创建对象
    var o = new Object();

    //可以在这里定义私有变量和函数

    //添加方法
    o.sayName = function () {
        console.info(name);
    };

    //返回对象
    return o;
}

var person1 = Person("Bill", 21, "programmer");
person1.sayName();
console.info(person1);

/**
 在这种模式创建的person1中,除了使用sayName()方法外,没有其他办法修改name的值。即使有其他代码会给这个对象添加方法或数据成员,但也不可能有别的办法访问传入到构造函数中的原始数据。

 稳妥构造函数模式提供的这种安全性,使他非常适合在某些安全执行环境。如: ADsafe(www.adsafe.com)和Caja(http://code.google.com/p/google-caja/)提供的环境下使用。


 缺点:
 与寄生函数模式类似,使用稳妥构造函数模式创建的对象与构造函数之间也没有什么关系,因此instanceof操作符对这种对象也没有什么意义。
 */