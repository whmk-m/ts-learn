"use strict";
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
var enumerate = Reflect.enumerate;
{
    // 数字枚举  Red使用默认为 0。 其余的成员会从 0开始自动增加1。
    let Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    let c = Color.Blue; // 2
    let g = Color[2]; // 'Blue'
    console.log(Color); // 反向映射
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
    // Direction.Up = 'whmk'  // 枚举成员是一个只读类型的属性不能更改
    console.log(Direction, Direction.Up);
}
{
    // 异构枚举 混合字符串和数字成员
    let Answer;
    (function (Answer) {
        Answer["No"] = "no";
        Answer[Answer["Yes"] = 1] = "Yes";
    })(Answer || (Answer = {}));
    console.log(Answer);
}
{
    // 计算的成员和常量成员
    // 常量成员在编译阶段就求值，分类如下：
    // 1.直接的数字字面量或者字符串字面量 如 a=1 / name = 'wm'
    // 2.该成员是枚举中第一个成员，不管有没有初始化
    // 3.某一成员的值是对之前定义的常量枚举成员的引用，或者其他地方的也行
    // 4.通过一元、二元运算符算出来的也算常量成员 如：a= 1+1 、b = (10*100) 等
    // 计算出来的成员在运营阶段就求值  如 a=Math.random() 、 b = 'str'.length 等，在计算成员的后面必须手动初始化，否则报错
    let FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["First"] = 0] = "First";
        FileAccess[FileAccess["Blur"] = 1] = "Blur";
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // computed member
        FileAccess[FileAccess["length"] = "123".length] = "length";
        FileAccess[FileAccess["random"] = Math.random()] = "random";
    })(FileAccess || (FileAccess = {}));
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
