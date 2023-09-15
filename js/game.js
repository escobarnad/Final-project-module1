class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameContainer = document.getElementById('game-container')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 600
      this.width = 920
      this.messi = new Messi(this.gameScreen, 230, 550, 80, 40)
    //   this.obstacles = []
    //   this.animateId = 0
    //   this.score = 0
    //   this.lives = 3
    //   this.gameOver = false
    }

    start() {
        this.startScreen.style.display = 'none'
        this.gameContainer.style.display = 'flex'
        this.gameScreen.style.display = 'block'
        this.gameEndScreen.style.display = 'none'
        
    
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px` 
        
        this.gameLoop()
      }

      gameLoop(){
        this.update()

        requestAnimationFrame(this.gameLoop)
      }

      update(){

      }
    }