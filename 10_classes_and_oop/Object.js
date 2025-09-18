function multipleBy5(num){
    return num*5
}

multipleBy5.power = 2

// console.log(multipleBy5(4))
// console.log(multipleBy5.power)
// console.log(multipleBy5.prototype)

const ar = [1,3,4,4]
// console.log(ar.prototype)
ar.name = "string"
// console.log("arr", ar)

const objeact = {
    id: 0,
    name: 'Fahim'
}
// console.log("onj", objeact.__proto__)

function createuser (userName, score){
    this.userName = userName
    this.score = score
    // return this
}
createuser.prototype.increment = function(){
    this.score++
    // return this
}
createuser.prototype.printMe = function(){
    console.log(`${this.userName} price is ${this.score}`)
}

const chai = new createuser("chai", 15)
const tea = new createuser("tea", 10)
chai.increment()

// console.log(new createuser("chai", 15))
// console.log(chai.increment())
console.log(chai.printMe())
