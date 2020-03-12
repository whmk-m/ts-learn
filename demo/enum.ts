// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
import enumerate = Reflect.enumerate;

{
    // 数字枚举  Red使用默认为 0。 其余的成员会从 0开始自动增加1。
    enum Color {
        Red,
        Green,
        Blue
    }

    let c: number = Color.Blue; // 2
    let g: string = Color[2]  // 'Blue'
    console.log(Color)  // 反向映射
}


{
    // 字符串枚举
    enum Direction {
        Up = "UP1",
        Down = "DOWN1",
        Left = "LEFT1",
        Right = "RIGHT1",
    }

    // Direction.Up = 'whmk'  // 枚举成员是一个只读类型的属性不能更改

    console.log(Direction,Direction.Up)
}

{
  // 异构枚举 混合字符串和数字成员
    enum Answer {
        No = 'no',
        Yes = 1,
    }
    console.log(Answer)
}


{
    // 计算的成员和常量成员
    // 常量成员在编译阶段就求值，分类如下：
    // 1.直接的数字字面量或者字符串字面量 如 a=1 / name = 'wm'
    // 2.该成员是枚举中第一个成员，不管有没有初始化
    // 3.某一成员的值是对之前定义的常量枚举成员的引用，或者其他地方的也行
    // 4.通过一元、二元运算符算出来的也算常量成员 如：a= 1+1 、b = (10*100) 等
    // 计算出来的成员在运营阶段就求值  如 a=Math.random() 、 b = 'str'.length 等，在计算成员的后面必须手动初始化，否则报错
    enum FileAccess {
    // constant members
    First,
    Blur = FileAccess.First + 1,
    Read    = 1 + 1,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,

    // computed member
    length = "123".length,
    random =Math.random()
}

}
{
    enum Days {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};
    console.log(Days["Sun"] === 7); // true
    console.log(Days["Mon"] === 1.5); // true
    console.log(Days["Tue"] === 2.5); // true
    console.log(Days["Sat"] === 6.5); // true
}


{
    // 常数枚举
    const enum Directions {
        Up,
        Down,
        Left,
        Right = 10  // 赋值必须是一个常量，不能通过计算而的值
    };
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
}


