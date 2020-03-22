{
    // js ES7中类使用方式  定义属性可不用在constructor中
    // “类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
    class People {
        name='wm';
        constructor() {
        }
    }
    console.log(People)
}
{
    // js ES7中类使用方式  可以使用static 定义静态属性
    class People {
        static FullName = 'wm';
        constructor() {
        }
    }
    // 静态属性 只能通过类直接调用
    console.log(People,People.FullName)
}

// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。
// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问， private 声明的构造函数不能被继承也不能被实例化
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的，protected 声明的构造函数可以被继承不能被实例化
{
     class People {
         public fullName:string;
         public constructor(name='liu hui') {
             this.fullName = name
         }
     }
     const people = new People();
     console.log(people,people.fullName) // 可以在任何地方被访问到
}

{
     class People {
         private fullName:string;
         public constructor(name='liu hui') {
             this.fullName = name
         }
     }
     const people = new People('li hao');
     // console.log(people.fullName) // private 不能在声明它的类的外部访问  会报错

    class Zhao extends People {
         constructor(name:string) {
             super(name);
             // console.log(this.fullName) // private 也不能在子类中进行访问  会报错
         }
    }

    const zhao = new Zhao('Zhao Yun');
}

{
    // private 声明的构造函数，不能被实例化也不能被继承
    class People {
        private fullName:string;
        private constructor(name='liu hui') {
            this.fullName = name
        }
    }
    // const people = new People('li hao');

    // class Zhao extends People {}
}

{
    class People {
        protected fullName:string;
        public constructor(name='liu hui') {
            this.fullName = name
        }
    }
    const people = new People('Wu Chuan');
    // console.log(people.fullName) // protected 不能在声明它的类的外部访问  会报错

    class Zhao extends People {
        constructor(name:string) {
            super(name);
            console.log(this.fullName) // protected 可以在子类中进行访问
        }
    }
}

{
    class People {
        public fullName:string;
        protected constructor(name='liu hui') {
            this.fullName = name
        }
    }
    // const people = new People(); // protected 声明的构造函数，不能被实例化

    class Zhao extends People { // protected 声明的构造函数，可以被继承
        constructor(name:string) {
            super(name);
        }
    }
    const zhao = new Zhao('zhao hai')
}

{
    class Animal {
        public height:string;
        readonly gender:string; // 定义一个只读的属性
        constructor(x:string,public weight:string,gender:string) { // 修饰符使用在构造函数参数中  等同于类中定义该属性同时给该属性赋值
            // this.weight = weight 可省略该步骤
            this.height = x;
            this.gender = gender
        }
    }

    const cat = new Animal('100kg','50cm','male')
    console.log(cat.weight,cat.height,cat.gender)
    // cat.gender = 'female' // 只读属性 不能修改
    // console.log(cat.gender)
}

{
    // 抽象类 不能被实例化，只能被继承，并且抽象方法必须由子类去实现
    abstract class Animal{
        protected constructor(public weight:string) {}
        sayHello(type:string):string{ //  普通的原型方法
           return `hello ${type}!`
        }
        abstract sayWeight():any // 定义一个抽象方法，并且必须由子类去实现
    }

    // const dog = new Animal('100kg')  // 抽象类不能被实例化
    // console.log(dog.weight,dog.sayWeight())

    class Cat extends Animal{  // 抽象类只能被继承
        constructor(weight:string) {
            super(weight);
        }
        sayWeight(): any {  // 抽象方法必须由子类去实现
            return `Cat:I'm ${this.weight}`
        }
    }

    const cat:Cat =  new Cat('250kg')  // 为实例的对象添加类型：Cat，如果实例了其他类就会报错
    console.log(cat.weight,cat.sayHello('cat'),cat.sayWeight())

    class Dog extends Animal{  // 抽象类只能被继承
        constructor(weight:string) {
            super(weight);
        }
        sayWeight(): any {  // 抽象方法必须由子类去实现
            return `Dog:I'm ${this.weight}`
        }
    }

    const dog:Dog =  new Dog('50kg')

    const animals:Animal[] = [cat,dog]
    animals.forEach(item => console.log(item.sayWeight()))  // 根据不同的实例，执行同一个方法的不同实现
}

{
    // 返回this 实现链式调用
    class WorkFlow {
        parentStep1():any{
            console.log('parentStep1...',this)
            return this
        }
        parentStep2():any {
            console.log('parentStep2...',this)
            return this
        }
    }
    new WorkFlow().parentStep1().parentStep2()

    // 子类继承父类，实现父子类之间混合链式调用
    class MyFlow  extends WorkFlow{
        myStep1():any{
            console.log('myStep1...',this)
            return this
        }
        myStep2():any{
            console.log('myStep2...',this)
            return this
        }
    }

    new MyFlow().myStep1().parentStep1().myStep2().parentStep2()
}