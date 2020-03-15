"use strict";
// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
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
    // 计算出来的成员在运行阶段就求值  如 a=Math.random() 、 b = 'str'.length 等，在计算成员的后面必须手动初始化，否则报错
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
    // 联合枚举 成员必须是常量成员中以下类型
    //  1.成员未被初始化
    // 2.成员被初始化为数字包括负数、字符串
    let Human;
    (function (Human) {
        Human["name"] = "wm";
        Human[Human["age"] = 22] = "age";
    })(Human || (Human = {}));
    let man = {
        name: Human.name,
        weight: 200
    };
    console.log(man);
}
{
    // 未初始化的值会根据前一个初始化的值自增1，后面的依次递增
    let Days;
    (function (Days) {
        Days[Days["Sun"] = 7] = "Sun";
        Days[Days["Mon"] = 8] = "Mon";
        Days[Days["Tue"] = 9] = "Tue";
        Days[Days["Wed"] = 1.5] = "Wed";
        Days[Days["Thu"] = 2.5] = "Thu";
        Days[Days["Fri"] = 3.5] = "Fri";
        Days[Days["Sat"] = 4.5] = "Sat"; /* 4.5 */
    })(Days || (Days = {}));
    ;
    console.log(Days["Sun"] === 7); // true
    console.log(Days["Mon"] === 8); // true
    console.log(Days["Tue"] === 9); // true
    console.log(Days["Sat"] === 4.5); // true
    console.log(Days);
}
{
    ;
    let directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 10 /* Right */];
}
{
    // 外部枚举 外部枚举用来描述已经存在的枚举类型的形状。
    // 外部枚举与正常的枚举成员对比有一个很重要的区别：非常数的外部枚举而言没有被初始化的成员会被当做计算后的成员  正常枚举成员中没有初始化的成员会当做常量枚举
    //  declare enum Enum {
    //         A = 1,
    //         B,
    //         C = 2
    //     }
    //  console.log(Enum)
}
