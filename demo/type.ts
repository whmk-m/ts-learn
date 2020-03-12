{
    // 类型别名
    // 类型别名会给一个类型起个新名字。 类型别名有时和接口很像，但是可以作用于原始值，联合类型，元组以及其它任何你需要手写的类型。
    type Name = string;
    type AgeResolver = (a:number)=>number
    type NameOrAgeResolver = Name | AgeResolver
    function getNameOrAge(nameOrAge:NameOrAgeResolver,age:number):string | number {
        if(typeof nameOrAge === 'string') return nameOrAge + '520';
        return nameOrAge(age)
    }

    console.log(getNameOrAge('whmk',20));
    console.log(getNameOrAge(function (x:number):number {
            return x*100
    },20))
}

{
    // 字符串字面量类型用来约束取值只能是某几个字符串中的一个。
    type Name = 'Blob' | 'Aris' | 'jack';

    function getName(name: Name): string {
        return 'hello,' + name + '!';
    }

    // 我们使用 type 定了一个字符串字面量类型 Name，它只能取三种字符串中的一种。
    // 注意，类型别名与字符串字面量类型都是使用 type 进行定义。
    console.log(getName('Blob'))
}