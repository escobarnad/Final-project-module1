class Messi {
    constructor (gameScreen, left, top, height, width){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.height = height
        this.width = width
        this.directionX = 0
        this.directionY = 0
        this.player = document.createElement('img')

        this.player.src = '../images/Messi.png'
        this.player.style.position = "absolute"

        this.player.style.left = `${this.left}px`
        this.player.style.top = `${this.top}px`
        this.player.style.height = `${this.height}px`
        this.player.style.widows = `${this.width}px`

        this.gameScreen.appendChild(this.player)
    }

    move () {
        this.updatePosition()
        this.player.style.left = `${this.left}px`
        this.player.style.top = `${this.top}px`

    }

    updatePosition (){
        if (this.left < 58){
            this.left = 58
        } 
        else if (this.left > this.gameScreen.clientWidth - 60 - this.width){
            this.left = this.gameScreen.clientWidth - 60 - this.width
        }
        else {
            this.left += this.directionX
        }

        if (this.top < 15){
            this.top = 15
        } 
        else if (this.top > this.gameScreen.clientHeight - 18 - this.height){
            this.top = this.gameScreen.clientHeight - 18 - this.height
        }
        else {
            this.top += this.directionY
        }
    }

    didCollide(defenders) {
        const playerRect = this.player.getBoundingClientRect()
        const obstacleRect = defenders.player.getBoundingClientRect()
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          return true
        } else {
          return false
        }
      }

}
