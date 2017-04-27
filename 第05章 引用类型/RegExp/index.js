/*

var expression = /pattern/flags;

pattern: 正则表达式
flag: g: 全局
      i: 不分大小写
      m: 多行
 */


var string = "abcatc";

var pattern1 = /.at/gi;
console.info(pattern1);

var p1 = pattern1.test(string);
console.info(p1);

console.info(pattern1.global);
console.info(pattern1.ignoreCase);
console.info(pattern1.multiline);
console.info(pattern1.source);



var string2 = "mom and dad and baby";
var pattern2 = new RegExp("mom( and dad( and baby)?)?", "gi");
var matches = pattern2.exec(string2);
console.info(matches);




