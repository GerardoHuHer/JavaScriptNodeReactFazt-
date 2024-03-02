function hello(){
    return function (){
        return "hola"
    }
}

function hello1(name = "world!"){
    return "hello " + name 
}

function add(a, b){
    return a + b
}

function obj(){
   return {name: "Gerardo"} 
}

console.log(add(10,5))

const result = hello1("Gerardo")
console.log(result)

const result1 = hello1("Ale")
console.log(result1)

// Objetos
const user = {
    name: "Ryan",
    lastName: "Perze",
    age: 20,
    addres: {
        country: "Colombia",
        city: "Bogota",
        street: "Main street 1 2 3 4"
    },
    friends: ["Pedro", "Juan"],
    active: true,
    sendMain: function (){
        return "sending email"
    }
}

console.log(user)