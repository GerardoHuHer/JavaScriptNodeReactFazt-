import {add} from "./add.js"
const names = ['ryan', 'joe', 'maria']

names.forEach(function (name){
    console.log(name)
})

console.log(names)

const newNames = names.map(function(name){
   return `Hola ${name}` 
})

console.log(newNames)

const nameFound = names.find(function(name){
    if(name === 'joe'){
        return name
    }
})

console.log(nameFound)

const nameFilter = names.filter(function(name){
    if(name === 'joe'){
        return name
    }
})

console.log(nameFilter)

console.log(add(5, 6))