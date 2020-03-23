"use strict";
// 类与接口
// 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces）。
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。
{
    class Door {
        constructor(name) {
            this.name = name;
        }
    }
    // 类实现接口  一个类可以实现多个接口
    class SecurityDoor extends Door {
        constructor(name) {
            super(name);
        }
        alert(type) {
            return `This name is ${this.name} and type is ${type} Alarm`;
        }
    }
    var door = new SecurityDoor('smallDoor');
    console.error(door.alert('securityDoor'));
    class Car {
        alert(type) {
            return `This is ${type} Alarm`;
        }
    }
    console.error(new Car().alert('BenChi'));
}
{
    class Car {
        alert(type) {
            return `This is ${type} Alarm`;
        }
        lightOn() {
            return 'lightOn';
        }
        lightOff() {
            return 'lightOff';
        }
    }
    const car = new Car();
    console.error(car.alert('BaoMa'), ';' + car.lightOff());
}
{
    // 接口继承类
    //  声明 class Animal 时，除了会创建一个名为 Animal 的类之外，同时也创建了一个名为 Animal 的类型（实例的类型）。
    class Animal {
        constructor(x, y) {
            this.fullName = x;
            this.weight = y;
        }
        eat() {
            return 'eating .... ';
        }
    }
    const cat = {
        fullName: 'mimi',
        weight: '100kg',
        sleep() {
            return 'cat sleep .... ';
        },
        eat() {
            return 'cat eat .... ';
        }
    };
    console.log(cat);
}
// 如何理解接口继承了带有私有属性和受保护成员的类 ？
{
    class Auto {
        constructor(length) {
            this.length = length;
        }
    }
    // 非Auto 的子类不能实现这个接口 会报错
    // class Cycle implements AutoInterface {
    // 就算按照Auto 方式添加了私有属性length 也不能通过编译
    // private length: number;
    // constructor(length: number) {
    //     this.length = length;
    // }
    // }
    // Auto 的子类能实现这个接口
    class Bus extends Auto {
    }
    let bus = new Bus(10);
    // 由于length 在父类中是私有的属性，只能在父类自己能访问，不能在子类中访问和其他形式的访问  报错是正常的
    // console.log(bus,bus.length); // Bus {length: 10}
}
{
    // 定义一个类
    class Auto {
        constructor(value, length) {
            this.value = value;
            this.length = length;
        }
    }
    // Bus类继承Auto类，并实现接口AutoInterface
    class Bus extends Auto {
        // 定义构造函数 使用super实例父类的属性
        constructor(value, length) {
            super(value, length);
        }
        // 定义并实现接口的方法
        sayHello() {
            console.log('hello Bus!');
        }
    }
    let bus = new Bus(520, 100);
    bus.sayHello();
    // 由于length 在父类中是私有的属性，只能在父类自己能访问，不能在子类中访问和其他形式的访问
    // value 是 public属性所以能以任何形式的访问
    // console.log(bus,bus.length,bus.value); // Bus {value:520,length: 10}
}
