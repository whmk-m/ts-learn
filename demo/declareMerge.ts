// 声明合并 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
{
    // 函数的合并 --> 函数的重载
    function say(a: number): number;
    function say(b: string): string;
    function say(c:number | string):any {
        typeof c === 'number' ? console.log('520'+c) : console.log('250'+c);
    }
    say(520)
    say('LiuNan')
}

{
    // 接口的合并
    interface Add {
        name:string
    }

    interface Add {
        // name:number; // 如果出现相同的属性声明时，定义的类型必须保持一致
        age:number;
    }

    // 上面的接口合并后就是这样的
    interface AddMerge {
        name:string;
        age:number;
    }

    let obj:Add = {
        name:'wm',
        age:22
    }
    console.log(obj)
}

{
    // 接口中方法如果是以函数定义的方式那么属性与方法的合并都表现一致，如果是定义函数的接口那么构造函数的合并与函数的合并表现一致
    interface Add {
        work:string;
        sayHello:(a:number) => number;
        (x:number):number;
    }

    interface Add {
        age:number;
        sayHello:(a:number) => number;
        (x:string):string
    }
    // 合并后的形式如下
    interface AddMerge {
        work:string;
        age:number;
        sayHello:(a:number) => number;
        (x:string|number):string|number
    }

    let add:Add = (function (x:string|number) {
        return x
    }) as Add
    add.work = 'wm';
    add.age = 22;
    add.sayHello = function (b) {
        return b
    }
    console.log(add('whmk'))
}

{
    // 接口中方法如果是以函数声明的方式，那么方法的合并与函数的合并表现一致
    interface Alarm {
        price: number;
        alert(s: string): string;
    }
    interface Alarm {
        weight: number;
        alert(s: string, n: number): string;
    }
    // 合并后的形式如下
    interface AlarmMerge {
        price:number;
        weight:number;
        alert(s: string): string;
        alert(s: string, n: number): string;
    }
    let  alarm:Alarm = {
        price:180,
        weight:200,
        alert(s:string,n?:number): string { // 注意这里n是可选参数，因为第一个接口声明时没有n这个参数
            return n?String(n) + s:s
        }
    }
    console.log(alarm.alert('whmk',520))
}

