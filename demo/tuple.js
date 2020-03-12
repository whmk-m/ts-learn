"use strict";
{
    // 数组合并了相同类型的对象，而元组（Tuple）合并了不同类型的对象。
    // 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组。
    let tom = ['tom', 22, Symbol(1)];
    console.log(tom);
    // 访问元祖类型的索引值时，可访问的属性方法需要符合其类型的,比如number下没有slice方法
    console.log(tom[0].slice(1), tom[1].toPrecision(3), tom[2]);
    // 添加新的元素时，提供的类型需要符合其所有类型中的一种，也就是:联合类型
    tom.push(22);
    console.log(tom);
}
