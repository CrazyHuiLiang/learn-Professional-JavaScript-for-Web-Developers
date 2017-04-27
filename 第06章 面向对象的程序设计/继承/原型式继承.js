/**
 * Created by Zhang on 16/8/9.
 */

function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: "Bill",
    friends: ["Annie", "Frank"]
};

var antherPerson = object(person);
antherPerson.name = "Greg";
antherPerson.friends.push("Rob");

console.log(person.name);
console.log(person.friends);

console.log(antherPerson.name);
console.log(antherPerson.friends);


/*
 ECMAScript5 写法
 */

var antherPerson2 = Object.create(person, {
    name: {
        value: "Frank"
    }
});
antherPerson2.friends.push("Shelby");
console.log(antherPerson2.name);
console.log(antherPerson2.friends);


/*
 缺点: 1、原型链中有引用类型的属性时,该属性会被所有实例所公用。
      2、在构造子类型的实例时,无法向超类的构造函数中传递参数
 */
