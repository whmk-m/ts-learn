"use strict";
{
    // 函数声明中的输入输出类型定义
    function sayHello(name, age) {
        return `Hello everyone! My name is ${name},I'm ${age} years old...`;
    }
    // console.log(sayHello('whmk'))
    // console.log(sayHello('whmk', 22,30)) // 参数个数不能多也不能少
    console.log(sayHello('whmk', 22));
}
// 函数表达式
{
    // 下面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
    let mySum = function (x, y) {
        return x + y;
    };
    console.log(mySum(0.1, 10));
}
// 如果需要我们手动给 mySum 添加类型，则应该是
{
    let mySum = function (x, y) {
        return x + y;
    };
    console.log(mySum(10, 90));
}
{
    // 使用 es6 箭头函数
    let mySum = (x, y) => x + y;
    console.log(mySum(999, 1000));
    // 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
    // 在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。
}
{
    //用接口来定义函数, 参数名称不一定和接口定义的参数名称相同
    let sayHello = function (name, age) {
        return age > 20;
    };
    console.log(sayHello('whmk', 12));
}
{
    // 使用 ? 表示可选的函数参数,可选的函数参数一定要放在确定参数的后面
    function f(name, age, grade) {
        console.log(name, age, grade);
    }
    f('wm', 22);
    f('wm', 22, 90);
}
{
    // 函数参数默认值,参数默认值一般要放在确定参数的后面，而且提供了参数默认值，相当于一个可选参数
    function f(name, age, grade = 100) {
        console.log(name, age, grade);
    }
    f('dsadas', 22);
    f('dasdasd', 22, 90);
}
{
    // 剩余参数,剩余参数其实是一个数组，在ts中将它显示声明为任意类型的数组
    // 剩余参数要放在所有函数参数的最后面
    function f1(a, b, ...arr) {
        console.log(a, b, arr);
    }
    console.log(f1(10, 20, 40, 50, 60));
    let arr = [];
    arr.push(1212);
    arr.push(4554, 3432423);
    // 使用...展开项，将数组项都展开
    arr.push(...[1, 2, 4, 5]);
    console.log(arr);
}
{
    function reverse(x) {
        return typeof x === 'number' ? Number(x.toString().split('').reverse().join('')) : x.split('').reverse().join('');
    }
    ;
    console.log(reverse(783));
    console.log(reverse('I Love You'));
}
