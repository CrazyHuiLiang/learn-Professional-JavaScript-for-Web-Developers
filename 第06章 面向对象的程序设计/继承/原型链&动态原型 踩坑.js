/**
 * Created by Zhang on 16/8/9.
 */

function SuperType() {

    this.flag = true;

    if (typeof this.getSuperValue != "function"){
        SuperType.prototype.getSuperValue = function () {
            return this.flag;
        };
    }
}

function SubType() {
    this.subflag = false;

    if ( !(SubType.prototype instanceof SuperType) ){

        //继承了 Super
        SubType.prototype = new SuperType();

        SubType.prototype.getSubValue = function () {
            return this.subflag;
        };
    }
}

var instance1 = new SubType();
console.log(instance1.getSuperValue);

var instance2 = new SubType();
console.log(instance2.getSuperValue);

/*
 使用动态原型模式创建父类,打算使用动态原型的思路配合原型链实现继承,后来发现,第一次创建实例时,
 在prototype上的函数都找不到了。

 后来细细分析后,发现在第一次初始化实例时SubType.prototype本不是SuperType的实例,后来在构造函数中使用SuperType的实例覆盖
 SubType.prototype,不过已经初始化的实例中的[[prototype]]指向的仍是原先的SubType.prototype,所以方法getSuperValue以及getSubValue都
 不能找到。


 因此可以得出:
 SuperType可以使用动态原型进行构造对象是可以的,不过为SubType设置prototype不可以动态,应该遵照原型链的写法。修改SubType代码如下:
 */


function SubType() {
    this.subflag = false;
}

//继承了 Super
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subflag;
};

instance1 = new SubType();
console.log(instance1.getSuperValue);

instance2 = new SubType();
console.log(instance2.getSuperValue);
