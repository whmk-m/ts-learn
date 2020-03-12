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
    // 用接口描述一个对象的行为，对象的属性名及类型必须和接口保持一致且属性个数也不能变化,先后顺序可以变化
    let tom = {
        name: 'wm',
        age: 10,
    };
    console.log(tom, tom.age);
}
{
    // 用接口描述一个对象的行为，对象的属性名及类型必须和接口保持一致
    let tom = {
        name: 'wowo',
    };
    console.log(tom, tom.age);
}
{
    let tom = {
        name: 'dada',
        // age:20,
        1: 100,
    };
    console.log(tom);
}
{
    // 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
    // 添加的任意属性其实也是可选的
    let tom = {
        id: 4268482,
        name: 'dada',
    };
    // tom.id = 7874
    console.log(tom);
}
