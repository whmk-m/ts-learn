{
    // 指定类型string
    let hello: string = 'Hello Typescript!';
    console.log(hello)
}

{
    // any任意类型，类似于js
    let anyThing: any = 'hello';
    anyThing = {}
    console.log(anyThing.myName = {firstName: 'wang'});
    console.log(anyThing.myName.firstName);
}

{
    // 不指定类型或不赋初始值，默认any类型
    let someType;
    someType = 7
    someType = true
    console.log(someType)
}

{
    // 类型推论：不指定类型但赋初始值，默认指向该类型
    let someType = 7;
    someType = 10
    console.log(someType)
}

{
    // 联合类型 用 | 表示多个类型
    let a: string | number | boolean= 10
    a = 'wm'
    a = true
    console.log(a)
}

{
    // 定义一个接口
    interface Person {
        name:string,
        age:number
    }

    // 用接口描述一个对象的行为，对象的属性名及类型必须和接口保持一致且属性个数也不能变化,先后顺序可以变化
    let tom:Person = {
        name:'wm',
        age:10,
    }
    console.log(tom,tom.age)
}

{
    // 定义一个接口,使用？表示这个属性是可选的
    interface Person {
        name:string,
        age?:number
    }

    // 用接口描述一个对象的行为，对象的属性名及类型必须和接口保持一致
    let tom:Person = {
        name:'wowo',
        // age:22,
        // grade:100,
    }
    console.log(tom,tom.age)
}

{
    // 新定义一个任意属性的类型为any，使用 [propName: number] 定义了任意属性取 number 类型的key。
    interface Person {
        name: string;
        age?: number;
        [propName: number]: any; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集： string 和 number 是any的子集，所以不会报错
    }

    let tom: Person = {
        name: 'dada',
        // age:20,
        1: 100,
    };
    console.log(tom)
}

{
    // 增加一个只读属性，
    interface Person {
        readonly id:number,
        name: string;
        age?: number;
        [propName: number]: any;
    }
    // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    // 添加的任意属性其实也是可选的
    let tom: Person = {
        id:4268482,
        name: 'dada',
    };
    // tom.id = 7874
    console.log(tom)
}
