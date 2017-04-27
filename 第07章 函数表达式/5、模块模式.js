/**
 * Created by Zhang on 16/8/22.
 */

var singleton = function () {

    //私有变量和私有函数
    var privateVariable = 10;
    
    function privateFunction() {
        return false;
    }

    //特权/公有方法或属性
    return {
        publicProperty: true,
        publicMethod: function(){

            privateVariable++;
            return privateFunction();
        }
    }
}();


console.log(singleton);
console.log(singleton.publicMethod());




















