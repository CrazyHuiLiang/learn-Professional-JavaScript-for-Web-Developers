/**
 * Created by Zhang on 16/8/8.
 */

function Person(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    return o;
}

var person1 = new Person("Bill", 21, "programmer");
console.info(person1);
console.log(person1.constructor);


/**

 除了使用new操作符并把使用的包装函数叫做构造函数之外,这个模式跟工厂模式其实是一摸一样的。

 构造函数不返回值的情况下,默认会返回新对象实例。而通过在构造函数的末尾添加一个return语句,可以重写调用构造函数时返回的值!

 这个模式可以在特殊情况下用来为对象创建构造函数。假如我们想创建一个具有额外方法的特殊数组。由于不能直接修改Array构造函数,因此可以使用这个模式。

 */

function SpecialArray() {

    //创建数组
    var sArray = new Array();


    //添加值
    sArray.push.apply(sArray, arguments);

    //添加方法
    sArray.toPipedString = function () {
        return this.join("|");
    };

    //返回数组
    return sArray;
}

var colors = new SpecialArray("red", "blue", "green");
console.log(colors.toPipedString());

/**

 优点:

 可以为已存在的对象添加属性/方法, 且不影响原有对象


 缺点:

 返回的对象于构造函数或者构造函数的原型属性之间没有关系(也就是说,构造函数返回的对象与在构造函数外部创建的对象没什么不同。为此,不能依赖instanceof操作符来确定对象类型)

 */