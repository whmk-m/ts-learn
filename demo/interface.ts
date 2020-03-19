// 接口定义一个对象
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
        [propName: number]: any; // 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集： string 和 number 是any的子集，所以不会报错 定义后该接口的属性个数就不确定了可以任意添加新的属性
    }

    let tom: Person = {
        name: 'dada',
        // age:20, // 可选的
        1: 100, // 属性个数不确定了可以任意添加新的属性，但要符合类型约束
        2:200,
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

{
    // 定义一个可索引的数字接口,使用这种方式，属性个数是不确定的
    interface StringArray {
        [index:number]:string
    }

    // 因为其索引是数字，值是字符串 所以符合StringArray类型
    let arr:StringArray = ['A','B','C']
    // 类似于直接声明一个字符串数组
    let arr2:string[] = ['D','E','F']

    console.log(arr,arr2)

}
{
    // 定义一个可索引的数字或字符串接口,混用两种格式的话，后一种值类型必须是前一种值类型的子类型,比如number不是string 的子级，会报错
    interface StringNumberObj {
        [index:number]:string,
        // [name:string]:number
        [name:string]:string
    }

    // 因为其索引可以是数字也可以是字符串
    let obj:StringNumberObj= {
        0:'A',
        1:'B',
        2:'C',
        'A':'0',
        'B':'1',
        'C':'2',
    }
    console.log(obj)
}

// 接口定义函数
{
    // 正常函数类型定义
    let add:(x:number,y:number) => number;
    add = (a,b) => a+b;
    console.log(add(10,20))

    // 接口定义函数类型
    interface Add {
        (x:number,y:number):number
    }
    let add2:Add = function (a,b) {
        return a + b;
    }
    console.log(add(100,80))

    // 使用类型别名给一个类型取个别名
    type Minus = (x:number,y:number) =>number;
    let minus:Minus = function (a,b) {
        return a - b;
    }
    console.log(minus(90,70))
}

{
    // 定义一个函数对象混合类型，让函数有自己的属性和方法
    interface Lib {
        (x:number,y:number):number,
        version:string,
        sayHello:()=>string
    }

    // let lib:Lib = (a,b)=> a + b; // 正常编译会报错，因为函数不是对象，在声明的时候不能直接加上属性和方法。
    let lib:Lib = ((a,b)=> a + b) as Lib;  // 使用类型断言，在编译阶段告诉ts这个类型我们已经知道是Lib类型无需编译了。这样就绕过了编译
    lib.version = '1.0';
    lib.sayHello = () => 'Hello world!'
    console.log(lib(90,9),lib.version,lib.sayHello())
}