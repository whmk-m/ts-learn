// 使用枚举我们可以定义一些带名字的常量。 使用枚举可以清晰地表达意图或创建一组有区别的用例。 TypeScript支持数字的和基于字符串的枚举。
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
    // 计算出来的成员在运行阶段就求值  如 a=Math.random() 、 b = 'str'.length 等，在计算成员的后面必须手动初始化，否则报错
    enum FileAccess {
        // constant members
        First,
        Blur = FileAccess.First + 1,
        Read = 1 + 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,

        // computed member
        length = "123".length,
        random = Math.random()
    }
}

{
    // 联合枚举 成员必须是常量成员中以下类型
    //  1.成员未被初始化
    // 2.成员被初始化为数字包括负数、字符串
    enum Human {
        name='wm',
        age=22
    }

    // 枚举成员成为了类型！ 我们可以说某些属性的值 只能是枚举成员的值：
    interface One {
        name :Human.name,
        weight:number,
    }

    let man:One = {
        name:Human.name, //  这里的name 必须是枚举成员的值 否则会报错
        weight:200
    }
    console.log(man)

}


{
    // 未初始化的值会根据前一个初始化的值自增1，后面的依次递增
    enum Days {Sun = 7, Mon, /* 8 */ Tue, /* 9 */ Wed=1.5, /* 初始化为 1.5 */ Thu, /* 2.5 */ Fri, /* 3.5 */ Sat /* 4.5 */};
    console.log(Days["Sun"] === 7); // true
    console.log(Days["Mon"] === 8); // true
    console.log(Days["Tue"] === 9); // true
    console.log(Days["Sat"] === 4.5); // true
    console.log(Days)
}

{
    // const 声明的为常数枚举  成员必须是常量成员 为了避免在额外生成的代码上的开销和额外的非直接的对枚举成员的访问
    // 常量枚举只能使用常量枚举表达式，并且不同于常规的枚举，它们在编译阶段会被删除。 常量枚举成员在使用的地方会被内联进来。
    const enum Directions {
        Up,
        Down,
        Left,
        Right = 10  // 赋值必须是一个常量，不能通过计算而的值
    };
    let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];
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
