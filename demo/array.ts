{
    // 最简单的方法是使用「类型 + 方括号」来表示数组,指定类型为数组，不允许有其他类型
    let arr:number[] = [1,2,3,4,5]
    arr.push(9)
    // arr.push('10')
    console.log(arr)
}

{
    // 使用数组泛型（Array Generic） Array<elemType> 来表示数组：
    let arr:Array<number|string> = [1,2,3,'4','5']
    arr.push(9)
    // arr.push(true)
    console.log(arr)
}

{
    // 用接口来表示数组
    interface NumberOfArray {
        [index:number]:number,
        pop:Function
    }

    let arr:NumberOfArray = [1,2,3,4,5]
    arr.pop()  // 使用接口来表示数组后，数组自带的方法不能使用了,必须在接口中同步定义
    console.log(arr)
}

{
    // 定义任意类型的数组
    let arr:any = [1,'wm',true,function () {},5,Symbol(20)]
    console.log(arr)
}

{
    // 不指定类型默认为any类型
    let arr = [...[1,2,4],'wsda',true]
    console.log(arr)
}