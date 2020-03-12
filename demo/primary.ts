{
    // 声明一个对象.加上可选的对象属性
    let obj:{x:number,y:number, [propName: string]: any} = {x:10,y:20};
    obj.x = 1;
    obj.y = 2;
    obj.name = 'wm'
    obj.age = 'wm'

    // 其他定义object的方式
    let obj2: object = {x:1,y:2}  // 表示非原始类型(非string/boolean/number/symbol/null/undefined)

    let obj3: Object = {a:1,b:2} // TypeScript定义的标准JavaScript Object接口(按ctr可查看)

    let obj4: {} = {} // 表示一个空对象类型
    console.log(obj,obj2,obj3,obj4)
}

{
    // Symbol类型
    let a:symbol = Symbol(1)
    let b = Symbol(1)
    console.log(a === b)
}

{
    // undefined 、null
    let a:undefined = undefined;
    let b:null = null;
    let c:void = void 0;
    let d:number = 20
    d = undefined // undefined、null 是所有类型的子级，tsconfig.js里设置了strictNullChecks:false 才可以对其他类型赋值，否则只能赋值给他们自己本身，但undefined可以赋给void类型
    c = null; // tsconfig.js里设置了strictNullChecks:false 后null才能赋值给 void 类型，否则只能赋值给他自己本身
}

{
    // never 类型，函数永远不会有返回值的类型，如 函数中抛出了错误，或者死循环等，或者变量被永不为真的类型保护所约束时。
    function f():never {
        throw new Error('never type');
    }

    // 会推断为never类型
    function f1() {
        while (true) {

        }
    }
    // console.log(f())
}
