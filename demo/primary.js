"use strict";
{
    // 指定类型string
    let hello = 'Hello Typescript!';
    console.log(hello);
}
{
    // any任意类型，类似于js
    let anyThing = 'hello';
    anyThing = {};
    console.log(anyThing.myName = { firstName: 'wang' });
    console.log(anyThing.myName.firstName);
}
{
    // 不指定类型或不赋初始值，默认any类型
    let someType;
    someType = 7;
    someType = true;
    console.log(someType);
}
{
    // 类型推论：不指定类型但赋初始值，默认指向该类型
    let someType = 7;
    someType = 10;
    console.log(someType);
}
{
    // 联合类型 用 | 表示多个类型
    let a = 10;
    a = 'wm';
    a = true;
    console.log(a);
}
{
    // 声明一个对象.加上可选的对象属性
    let obj = { x: 10, y: 20 };
    obj.x = 1;
    obj.y = 2;
    obj.name = 'wm';
    obj.age = 'wm';
    // 其他定义object的方式
    let obj2 = { x: 1, y: 2 }; // 表示非原始类型(非string/boolean/number/symbol/null/undefined)
    let obj3 = { a: 1, b: 2 }; // TypeScript定义的标准JavaScript Object接口(按ctr可查看)
    let obj4 = {}; // 表示一个空对象类型
    console.log(obj, obj2, obj3, obj4);
}
{
    // Symbol类型
    let a = Symbol(1);
    let b = Symbol(1);
    console.log(a === b);
}
{
    // undefined 、null
    let a = undefined;
    let b = null;
    let c = void 0;
    let d = 20;
    d = undefined; // undefined、null 是所有类型的子级，tsconfig.js里设置了strictNullChecks:false 才可以对其他类型赋值，否则只能赋值给他们自己本身，但undefined可以赋给void类型
    c = null; // tsconfig.js里设置了strictNullChecks:false 后null才能赋值给 void 类型，否则只能赋值给他自己本身
}
{
    // never 类型，函数永远不会有返回值的类型，如 函数中抛出了错误，或者死循环等，或者变量被永不为真的类型保护所约束时。
    function f() {
        throw new Error('never type');
    }
    // 会推断为never类型
    function f1() {
        while (true) {
        }
    }
    // console.log(f())
}
