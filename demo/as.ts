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
    // 访问联合类型值的属性时，这个属性必须是所有可能类型的共有属性，而length不是共有属性，something 的类型此时也没确定，所以编译不通过。为了通过编译，此时就可以使用类型断言了，
    // 类型断言不是真正的类型转换，断言成一个联合类型中不存在的类型是不允许的：
    // 这种写法是无法转换类型的，可以理解为类型选择，在编译阶段强行把 something 当作 string类型来访问了，起到代码保护作用，不会使代码崩溃
    // 因此它没有运行时的影响，在运行阶段是不起作用的，只是在编译阶段起作用。 TypeScript会假设你已经进行了必须的检查。
    function getLength(something: string | number): number {
        if ((something as string).length) {
            return (something as string).length;
        } else {
            return something.toString().length;
        }
    }
    console.log( getLength(100))
}