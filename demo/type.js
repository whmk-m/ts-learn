"use strict";
{
    function getNameOrAge(nameOrAge, age) {
        if (typeof nameOrAge === 'string')
            return nameOrAge + '520';
        return nameOrAge(age);
    }
    console.log(getNameOrAge('whmk', 20));
    console.log(getNameOrAge(function (x) {
        return x * 100;
    }, 20));
}
{
    function getName(name) {
        return 'hello,' + name + '!';
    }
    // 我们使用 type 定了一个字符串字面量类型 Name，它只能取三种字符串中的一种。
    // 注意，类型别名与字符串字面量类型都是使用 type 进行定义。
    console.log(getName('Blob'));
}
