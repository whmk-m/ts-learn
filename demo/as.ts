{
    // 类型断言 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构
    let someVal:any = "1231"
    // let length:number = (someVal as string).length
    let length:number = (<string>someVal).length
    console.log(length)
}

{
    // 有时候确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
    //  function getLength(something: string | number): number {
    //     if (something.length) {
    //         return something.length;
    //     } else {
    //         return something.toString().length;
    //     }
    // }
    // getLength(100)
}

{
    // 有时候确实需要在还不确定类型的时候就访问其中一个类型的属性或方法
    // 类型断言不是真正的类型转换，断言成一个联合类型中不存在的类型是不允许的：
    function getLength(something: string | number): number {
        if ((something as string).length) { // 转换成一个字符串有length属性时 TODO 类型断言 as 这里不太好理解
            return (something as string).length;
        } else {
            return something.toString().length;
        }
    }
    console.log( getLength(100))
}