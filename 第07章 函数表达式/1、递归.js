/**
 * Created by Zhang on 16/8/19.
 */


function factorial(num) {
    if(num <=1){
        return 1;
    }
    else {
        return num * arguments.callee(num-1);
    }
}

console.log(factorial(5));
console.log(factorial.name);

//在严格模式下不能使用 arguments.callee
//可以创建一个名为f()的命名函数表达式,然后将它赋值给factorial,函数名字f仍然有效

factorial = (function f(num) {
    if(num <=1){
        return 1;
    }
    else {
        return num * arguments.callee(num-1);
    }
});

console.log(factorial(5));
console.log(factorial.name);