// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
{
    enum Color {Red, Green, Blue}

    let c: number = Color.Blue; // 2
    let g: string = Color[2]  // 'Blue'
    console.log(c, g)
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


{
    // 字符串枚举
    enum Direction {
        Up = "UP1",
        Down = "DOWN1",
        Left = "LEFT1",
        Right = "RIGHT1",
    }
    console.log(Direction)
}
