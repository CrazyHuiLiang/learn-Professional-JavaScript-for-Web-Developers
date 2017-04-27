/**
 * Created by Zhang on 16/11/16.
 */

//域名最多4级
// let urlRegExp = /^https?:\/\/([a-z]|[1-9])+([\.]([a-z]|[1-9])+)+/;
//
// //域名最多4级
// let urlRegExp4 = /^https?:\/\/([a-z]|[1-9])+([\.]([a-z]|[1-9])+){0,3}$/;
//
// console.log( urlRegExp.exec('https://www.baidu.com.cn.cn.cn'));


let str = 'A333';
let reg1 = /\d+/;
let reg2 = /[a-zA-Z]+/;
console.log(reg1.test(str),reg2.test(str));

let specialChar = /(?:[!-/]+)|(?:[:-@]+)|(?:[[-`]+)|(?:[{-~]+)/;
const specialStr = '}jkjlk';
console.log(specialChar.exec(specialStr));

//限定符
const str2 = '<H1>章节 1 - 介绍正则表达式</H1>';
console.log(
    '通过在 *、+ 或 ? 限定符之后放置 ?，该表达式从"贪心"表达式转换为"非贪心"表达式或者最小匹配。\n贪婪:',
    /<.*>/.exec(str2)[0],
    '\n非贪婪：',
    /<.*?>/.exec(str2)[0],
    '\n',
    /<\w+?>/.exec(str2)[0]
);


//定位符
const chapter = 'Chapter 57 Chapter 57 Chapter 57';
const chapter2 = 'Chapter 57';
let reg4 = /^Chapter [1-9][0-9]{0,1}/;
let reg5 = /^Chapter [1-9][0-9]{0,1}$/;

console.log(reg4.exec(chapter));
console.log(reg5.exec(chapter));
console.log(reg4.exec(chapter2));
console.log(reg5.exec(chapter2));

let reg6 = /\bCha/;
console.log(reg6.exec(chapter));
console.log(reg6.exec(chapter2));

const reg7 = /ter\b/;
console.log(reg7.exec(chapter));
console.log(reg7.exec(chapter2));

const reg8 = /\Bapt/;
console.log(reg8.exec(chapter));
console.log(reg8.exec('aptttt'));




const str3 = 'Is is the cost of of gasoline going up up?';
const reg9 = /\b([a-z]+) \1\b/gi;
console.log(reg9.exec(str3));

const str4 = 'http://www.runoob.com:80/html/html-tutorial.html';
const reg10 = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;
console.log('\n\n',reg10.exec(str4));



const reg11 = /\W/;
const str5 = '.';
console.log(reg11.exec(str5));



