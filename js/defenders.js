class Defenders {
    constructor (gameScreen, left, top, height, width){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.player = document.createElement('img')
        this.direction = 1
        this.player.src = './images/Defender.png'
        this.player.style.position = "absolute"

        this.player.style.left = `${this.left}px`
        this.player.style.top = `${this.top}px`
        this.player.style.height = `${this.height}px`
        this.player.style.widows = `${this.width}px`

        this.gameScreen.appendChild(this.player)
    }

    updatePosition (){
        this.top += this.direction
        this.player.style.top = `${this.top}px`
    }
}