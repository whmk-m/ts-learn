"use strict";
// 接口定义一个对象
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
        // age:20, // 可选的
        1: 100,
        2: 200,
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
{
    // 因为其索引是数字，值是字符串 所以符合StringArray类型
    let arr = ['A', 'B', 'C'];
    // 类似于直接声明一个字符串数组
    let arr2 = ['D', 'E', 'F'];
    console.log(arr, arr2);
}
{
    // 因为其索引可以是数字也可以是字符串
    let obj = {
        0: 'A',
        1: 'B',
        2: 'C',
        'A': '0',
        'B': '1',
        'C': '2',
    };
    console.log(obj);
}
// 接口定义函数
{
    // 正常函数类型定义
    let add;
    add = (a, b) => a + b;
    console.log(add(10, 20));
    let add2 = function (a, b) {
        return a + b;
    };
    console.log(add(100, 80));
    let minus = function (a, b) {
        return a - b;
    };
    console.log(minus(90, 70));
}
{
    // let lib:Lib = (a,b)=> a + b; // 正常编译会报错，因为函数不是对象，在声明的时候不能直接加上属性和方法。
    let lib = ((a, b) => a + b); // 使用类型断言，在编译阶段告诉ts这个类型我们已经知道是Lib类型无需编译了。这样就绕过了编译
    lib.version = '1.0';
    lib.sayHello = () => 'Hello world!';
    console.log(lib(90, 9), lib.version, lib.sayHello());
}
