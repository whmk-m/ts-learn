"use strict";
// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。
{
    // 一个简单的例子
    function createArray(value, length) {
        return new Array(length).fill(value);
    }
    console.log(createArray('ts', 10));
}
{
    // 在上面那个例子中，我们不知道最后要返回的具体类型，而是使用的数组泛型，返回的是any类型。
    // 如果我们一开始不知道要定义什么类型，和返回什么类型，这时候泛型就派上用场了
    function createArray(value, length) {
        return new Array(length).fill(value);
    }
    // 在使用的时候赋予类型 number
    console.log(createArray(88, 88));
    // 也可以不指定，让它自己实行类型推断
    console.log(createArray(88, 88));
}
{
    // 定义泛型的时候，可以一次定义多个类型参数：
    function moreType(name, age) {
        return [age, name];
    }
    console.log(moreType('wang.mao', 22));
}
{
    // 泛型的约束  泛型继承接口 让它传入的类型必须拥有length属性
    function lengthFun(name) {
        return name.length; // 正常情况下 我们并不知道传入的类型是什么，因此直接使用length属性是不能通过编译的,所以要使用接口来约束传入的类型
    }
    // console.log(lengthFun(1231))
    console.log(lengthFun('wang.mao'));
}
{
    // 多个类型参数之间也可以互相约束,
    /**
     *  实现将来源对象上的属性覆盖目标对象上，要求来源对象上必须包含目标对象上的属性
     * @param target 目标对象
     * @param source 来源对象
     */
    function assign(target, source) {
        return Object.assign({}, target, source);
    }
    let target = { name: 'wang.mao', age: 22, grade: 100 };
    let source = { name: 'Liu.hui', age: 22, grade: 300, sourceSelf: 'mySelf' };
    console.log(assign(target, source));
}
{
    let createArray = function (value, length) {
        return new Array(length).fill(value);
    };
    // 调用函数时才定义泛型的类型
    console.log(createArray(50, 30));
}
{
    // 注意，此时在使用泛型接口的时候，需要函数定义时就定义泛型的类型，而不是在调用函数时才定义泛型的类型
    let createArray = function (value, length) {
        return new Array(length).fill(value);
    };
    console.log(createArray(520, 10));
}
{
    // 泛型类 泛型也可以用于类的类型定义中
    class CreateArray {
        constructor(value, length) {
            this.value = value;
            this.length = length;
        }
        create() {
            return new Array(this.length).fill(this.value);
        }
    }
    let createArray = new CreateArray('LiuHui', 2);
    // create 方法是其原型上的
    console.log(createArray, createArray.create());
}
{
    // 泛型类 泛型也可以用于类的类型定义中
    class GenericNumber {
    }
    let myGenericNumber = new GenericNumber();
    myGenericNumber.zeroValue = 0;
    // add 方法是其自身的方法，并不存在原型中
    myGenericNumber.add = function (x, y) { return x + y; };
    console.log(myGenericNumber, myGenericNumber.add(10, 90));
}
{
    // 泛型类的默认类型
    class CreateArray {
        constructor(value, length) {
            this.value = value;
            this.length = length;
        }
        create() {
            return new Array(this.length).fill(this.value);
        }
    }
    //  使用其默认类型
    let createArray1 = new CreateArray('LiuHui', 2);
    // 定义类型为number
    let createArray2 = new CreateArray(999, 2);
    // create 方法是其原型上的
    console.log(createArray1.create(), createArray2.create());
}
