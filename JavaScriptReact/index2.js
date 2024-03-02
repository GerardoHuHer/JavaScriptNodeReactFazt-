const background = 'yellow'
const color = 'white'
const isAuthorized = true

const result = `estos son estilos: ${background}${color}`

console.log(result)

const button = document.createElement("button");
button.innerText = "Click me";
button.style = `background: ${isAuthorized === true ? 'red' : background}; color: ${color}`


button.addEventListener('click', () => {
    if (isAuthorized){
        return alert("está autorizado")
    }
    alert("Usted no está autorizado")
})

document.body.append(button)