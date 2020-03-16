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
