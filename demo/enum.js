"use strict";
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
{
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Blue; // 2
    let g = Color[2]; // 'Blue'
    console.log(c, g);
}
{
    let Days;
    (function (Days) {
        Days[Days["Sun"] = 7] = "Sun";
        Days[Days["Mon"] = 1.5] = "Mon";
        Days[Days["Tue"] = 2.5] = "Tue";
        Days[Days["Wed"] = 3.5] = "Wed";
        Days[Days["Thu"] = 4.5] = "Thu";
        Days[Days["Fri"] = 5.5] = "Fri";
        Days[Days["Sat"] = 6.5] = "Sat";
    })(Days || (Days = {}));
    ;
    console.log(Days["Sun"] === 7); // true
    console.log(Days["Mon"] === 1.5); // true
    console.log(Days["Tue"] === 2.5); // true
    console.log(Days["Sat"] === 6.5); // true
}
{
    ;
    let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 10 /* Right */];
}
{
    // 字符串枚举
    let Direction;
    (function (Direction) {
        Direction["Up"] = "UP1";
        Direction["Down"] = "DOWN1";
        Direction["Left"] = "LEFT1";
        Direction["Right"] = "RIGHT1";
    })(Direction || (Direction = {}));
    console.log(Direction);
}
