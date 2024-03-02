//const title = document.createElement('h1')
//title.innerText = "Hola mundo desde JS"
// Duda de si con esto se hacen botones
//const button = document.createElement('button')
//button.innerText = 'click'
// Event Handler
//button.addEventListener('click', function (){
//    title.innerText = "Texto actualizado con JS"
//    alert("Se realizó un click")
//})

//document.body.append(title)
//document.body.append(button)
//const user = {
//    name: "Joe",
//    age: 30
//}
 
//function printInfo(user){
//   return '<h1>Hola ' + user.name + ' </h1>' 
//   return '<h1>Hola ' + user['name'] + ' </h1>' 
//}

//console.log(printInfo(user))
//document.body.innerHTML = printInfo(user)
//function start(){
//   return "Starting" 
//}

//console.log(start)

// FUNCIONES ANÓNIMAS
//console.log(function (){
//    return "Starting..."
//}())
//const button = document.createElement('button')
//button.innerText = "Click me"
//button.addEventListener("Click", function (){
//    alert('Clicked')
//})

//document.body.append(button)

// ARROW FUNCTION
function add(x, y){
    return x + y
}

const add1 = (x, y) => {
    return x + y
}

const showText = () => "Hola mundo"
const showNumber = () => 22
const showBoolean = () => true
const showArray = () => [1, 2, 3]
const showObject = () => ({name: "Ryan"})
console.log(showText())
console.log(showNumber())
console.log(showBoolean())
console.log(showArray())
console.log(showObject())