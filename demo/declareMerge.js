"use strict";
// 声明合并 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
{
    function say(c) {
        typeof c === 'number' ? console.log('520' + c) : console.log('250' + c);
    }
    say(520);
    say('LiuNan');
}
{
    let obj = {
        name: 'wm',
        age: 22
    };
    console.log(obj);
}
{
    let add = (function (x) {
        return x;
    });
    add.work = 'wm';
    add.age = 22;
    add.sayHello = function (b) {
        return b;
    };
    console.log(add('whmk'));
}
{
    let alarm = {
        price: 180,
        weight: 200,
        alert(s, n) {
            return n ? String(n) + s : s;
        }
    };
    console.log(alarm.alert('whmk', 520));
}
