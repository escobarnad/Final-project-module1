class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameContainer = document.getElementById('game-container')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 600
      this.width = 920
      this.messi = new Messi(this.gameScreen, 70, 265, 100, 50)
      this.defenders = []
      this.score = 0
    //   this.lives = 3
    //   this.gameOver = false
    // this.example = 0
      //   this.animateId = 0
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
        // console.log(this.example)
        if (this.defenders.length < 6) {
            this.defenders.push(new Defenders(this.gameScreen, (Math.random() * (this.gameScreen.clientWidth -140 -50 -80) +120), 
            (Math.random() * (this.gameScreen.clientHeight -60 -100) +30), 
            100, 
            50))
        }
        document.getElementById('score').innerText = this.score
        requestAnimationFrame(() => this.gameLoop())

       
      }

      update(){
        // this.example += 1
        this.messi.move()
        this.defenders.forEach(defenders => {
            if (defenders.top > 400){
                defenders.moveUp()          
            }
            else if (defenders.top < 400) {
                defenders.moveDown()
            }
            
        })
        if (this.messi.left > this.gameScreen.clientWidth - 70 - this.messi.width){
            if (this.messi.top > 200 && this.messi.top < 380 - this.messi.height){
                this.score += 1
                this.messi.left = 70
                this.messi.top = 265
            }
        }

      }
    }

    // this.gameScreen.clientHeight - 30 - defenders.height