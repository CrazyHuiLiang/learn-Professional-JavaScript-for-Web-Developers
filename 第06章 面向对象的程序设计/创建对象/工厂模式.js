/**
 * Created by Zhang on 16/8/8.
 */

function createPerson(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function () {
        console.info(this.name);
    };
    return o;
}

var person1 = createPerson("Bill", 21, "Programer");
var person2 = createPerson("Annie", 23, "teacher");


person1.sayName();
person2.sayName();



/**

缺点:

没有解决对象识别的问题(即怎样知道一个对象的类型)

*/
