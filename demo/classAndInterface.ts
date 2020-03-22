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

// 如何理解接口继承了带有私有属性和受保护成员的类 ？
{
    class Auto {
        // 定义了一个私有的成员
        private length: number;
        constructor(length: number) {
            this.length = length;
        }
    }

    // 接口继承类时，如果继承了带有私有属性和受保护成员的类，那么除了Auto这个类的子类外，别的类了就不能实现这个接口了
    // 注意，这么做的目的是限定接口的使用范围，并不会真正为这个接口添加类的私有和受保护属性（实际上接口也没有这种类型的属性），而这个限定范围就是：只能由子类来实现这个接口。
    interface AutoInterface extends Auto {}

    // 非Auto 的子类不能实现这个接口
    class Cycle implements AutoInterface {
        // 就算按照Auto 方式添加了私有属性length 也不能通过编译
        // private length: number;
        // constructor(length: number) {
        //     this.length = length;
        // }
    }


    // Auto 的子类能实现这个接口
    class Bus extends Auto implements AutoInterface {}

    let bus = new Bus(10);
    // 由于length 在父类中是私有的属性，只能在父类自己能访问，不能在子类中访问和其他形式的访问  报错是正常的
    console.log(bus,bus.length); // Bus {length: 10}
}

{
    // 定义一个类
    class Auto {
        private length: number;
        constructor(public value:number,length: number) {
            this.length = length;
        }
    }

    // 定义一个接口继承Auto类，并添加了一个sayHello 方法
    interface AutoInterface extends Auto {
        sayHello:() => void
    }

    // Bus类继承Auto类，并实现接口AutoInterface
    class Bus extends Auto implements AutoInterface {
        // 定义构造函数 使用super实例父类的属性
        constructor(value:number,length:number) {
            super(value,length);
        }
        // 定义并实现接口的方法
        sayHello(){
            console.log('hello Bus!')
        }
    }

    let bus = new Bus(520,100);
    bus.sayHello()
    // 由于length 在父类中是私有的属性，只能在父类自己能访问，不能在子类中访问和其他形式的访问
    // value 是 public属性所以能以任何形式的访问
    console.log(bus,bus.length,bus.value); // Bus {value:520,length: 10}
}