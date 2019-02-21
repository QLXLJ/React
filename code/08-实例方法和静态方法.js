//ES6 中 class 关键字，是实现面向对象编程的新形式；
function Person(name,age){
    this.name =name;
    this.age = age
}
//通过new出来的实例，访问到的属性，成为实例属性
//直接挂在给构造函数为静态属性,
Person.info = 'aaaa'
//静态方法，直接挂载在构造函数中
Person.show =function(){
    console.log('这是一个构造函数的静态方法')
}
Person.prototype.pay =function(){
    console.log('这是实例的方法')
}
var person = new Person('za',18);
person.pay()//这是实例方法
console.log(person)
Person.show()
//=========================================
//创建一个动物类
class Animail{
    //这是类中的构造器，
    //每一个类中，都有一个构造器，如果程序员没有手动制造一个构造器
    // ，那么可以认为类中有一个隐形的、空的构造器
    //构造器的作用:就是每次new这个类的时候，必会优先执行构造器中的代码


    //注意：
    //1、在class的区间内{}，只能写静态属性、构造器、静态方法、实例方法
    //2、class的内部，还是采用原来的方法实现，所以我们称之为语法糖
    constructor(name,age){
      this.name = name;
      this.age =age;
    }
    //在class内部，通过static修饰的属性，就是静态属性
    static info = 'bbbb'
    static show(){
        console.log('这是一个静态方法')
    }
    //实例方法，这将挂在在构造函数中
    jiao(){
        console.log('这是一个实例方法')
    }
  
}
var animail = new Animail('张三',20)
Animail.show()
console.log(animail)
console.log(animail.name)//实例属性
console.log(animail.age)//实例属性
console.log(Animail.info)//静态属性