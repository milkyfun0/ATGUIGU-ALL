// 变量
 const PI = 3.14
// 方法
function sum(a, b) {
    return a + b
}
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log(`hello my name ${this.name}`)
    }

}
export{
    PI,
    Person
}
