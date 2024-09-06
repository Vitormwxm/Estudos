const canvas = document.querySelector("canvas")

//pegando contexto do elemento canvas com getContext
const ctx = canvas.getContext("2d")

//essa é a constante que nunca vai mudar e vai ser responsável por manter um tamanho fixo dos elementos
const size = 30

// passando o tamanho da cobrinha
const snake = [
    {x:200 , y:200},
    {x:230 , y:200},
]

const drawSnake = () => {
    // todo elemeto criado, vai ser com a cor vermelha
    ctx.fillStyle = "#ddd"
    //percorre todo o array snake para que seja possível criar o corpo da cobrinha
    snake.forEach((position , index)=>{
        if(index == snake.length - 1){
            ctx.fillStyle = "white"
        }
        // o fillRect vai criar esse elemento, passando x,y e largura e altura do elemento
        ctx.fillRect(position.x, position.y, size , size)
    })
}

let direction = "up"

const moveSnake = () => {
    if(!direction) return

    const head = snake[snake.length - 1]

    //limpa a cabeça da cobrinha
    snake.shift()

    //se a direção for right -> insere a cabeça na direita
    if(direction == "right"){
        snake.push({x: head.x + size , y: head.y})
    }

    if(direction == "left"){
        snake.push({x: head.x - size , y: head.y})
    }

    if(direction == "down"){
        snake.push({x: head.x, y: head.y + size})
    }

    if(direction == "up"){
        snake.push({x: head.x , y: head.y - size})
    }
}
setInterval(()=> {
    ctx.clearRect(0,0, 600, 600)
    drawSnake()
    moveSnake()
}, 900)
