// 类与接口
// 一个类只能继承自另一个类，有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces）。
// 用 implements 关键字来实现。这个特性大大提高了面向对象的灵活性。

{
    // 定义接口，提取公共方法
    interface Alarm {
        alert(type:string):any
    }

    class Door {
        constructor(public name:string) {}
    }
    // 类实现接口  一个类可以实现多个接口
    class SecurityDoor extends Door implements Alarm {  // 使用关键字 implements 实现这个接口的方法
        constructor(name:string) {
            super(name);
        }

        alert(type: string): any {
            return `This name is ${this.name} and type is ${type} Alarm`;
        }
    }

    var door = new SecurityDoor('smallDoor')
    console.error(door.alert('securityDoor'))

    class Car implements Alarm {  // 使用关键字 implements 实现这个接口的方法
        alert(type: string): any {
            return `This is ${type} Alarm`;
        }
    }
    console.error(new Car().alert('BenChi'))
}

{

    // 接口继承接口

    interface Alarm {
        alert(type: string): any;
    }

    // LightableAlarm 继承了 Alarm，除了拥有 alert 方法之外，还拥有两个新方法 lightOn 和 lightOff
    interface LightableAlarm extends Alarm {
        lightOn(): any;
        lightOff(): any;
    }

    class Car implements LightableAlarm {  // 使用关键字 implements 实现这个接口的方法
        alert(type: string): any {
            return `This is ${type} Alarm`;
        }
        lightOn(): any {
            return 'lightOn';
        }
        lightOff(): any {
            return 'lightOff';
        }
    }

    const car = new Car();
    console.error(car.alert('BaoMa'),';'+car.lightOff())
}

{
    // 接口继承类

    //  声明 class Animal 时，除了会创建一个名为 Animal 的类之外，同时也创建了一个名为 Animal 的类型（实例的类型）。
    class Animal {
        fullName:string;
        weight:string;
        constructor(x:string,y:string) {
            this.fullName = x;
            this.weight = y;
        }

        eat():any {
            return 'eating .... '
        }
    }


    interface OtherAnimal {
        fullName:string,
        weight:string,
        eat():any
    }


    // 等价于 interface Cat extends OtherAnimal
    // 继承类时 是将类当做一个实例的类型来继承的（实例的类型当然不应该包括构造函数、静态属性或静态方法，只包含其中的实例属性和实例方法）
    // 所以「接口继承类」和「接口继承接口」没有什么本质的区别。
    interface Cat extends Animal {
        sleep():any;
    }

    const cat:Cat = {
        fullName:'mimi',
        weight:'100kg',
        sleep(): any {
            return 'cat sleep .... ';
        },
        eat(): any {
            return 'cat eat .... '
        }
    }

    console.log(cat)
}