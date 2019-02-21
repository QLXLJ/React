//可以把父类看做是一个原型对象
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age
    }
    sayHello(){
        console.log('你好，中国的朋友')
    }
}
//=========================================
//创建一个中国人
class Chinese extends Person{
    
}
var chinese = new Chinese('张三',20)
chinese.sayHello()
console.log(chinese)

//创建一个美国人
class Amarima extends Person{

}
var amarima = new Amarima('jack',22)
console.log(amarima)
amarima.sayHello()
