class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameContainer = document.getElementById('game-container')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 600
      this.width = 920
      this.messi = new Messi(this.gameScreen, 80, 285, 80, 40)
      this.defenders = []
      this.score = 0
      this.lives = 3
      this.gameOverLose = false
      this.gameOverWin = false
      this.winScreen = document.getElementById('game-over-win')
      this.loseScreen = document.getElementById('game-over-lose')
      this.audioCrowd = document.getElementById("crowd")

    }

    start() {
        this.startScreen.style.display = 'none'
        this.gameContainer.style.display = 'flex'
        this.gameScreen.style.display = 'block'
        this.gameEndScreen.style.display = 'none'
        
    
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px` 

        this.audioCrowd.play()
        this.audioCrowd.volume = 0.2
        
        this.gameLoop()
      }

      gameLoop(){
        this.update()

        if (this.defenders.length < 6) {
            this.defenders.push(new Defenders(this.gameScreen, (Math.random() * (this.gameScreen.clientWidth -140 -50 -80) +150), 
            (Math.random() * (this.gameScreen.clientHeight -60 -100) +30), 
            100, 
            50))
        }
        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives

        // Game over

        if (this.lives < 1){
          this.gameOverLose = true
          this.audioCrowd.pause()
          
        }
        else if (this.score >= 1){
          this.gameOverWin = true
          this.audioCrowd.pause()

        }
        
        if (this.gameOverLose) {
          this.startScreen.style.display = 'none'
          this.gameContainer.style.display = 'none'
          this.gameScreen.style.display = 'none'
          this.gameEndScreen.style.display = 'block'
          this.winScreen.style.display = 'none'
          this.loseScreen.style.display = 'block'
        }
        else if (this.gameOverWin){
          this.startScreen.style.display = 'none'
          this.gameContainer.style.display = 'none'
          this.gameScreen.style.display = 'none'
          this.gameEndScreen.style.display = 'block'
          this.winScreen.style.display = 'block'
          this.loseScreen.style.display = 'none'
        }
        else {
          
          requestAnimationFrame(() => this.gameLoop())
        }


       
      }

      update(){

               
        this.messi.move()

        this.defenders.forEach(defenders => {
         
          // Messi colliding with the defenders 
          
          defenders.updatePosition() 
          
          if (this.messi.didCollide(defenders)) {
            this.lives -= 1
            defenders.player.remove()
            this.defenders.push(new Defenders(this.gameScreen, (Math.random() * (this.gameScreen.clientWidth -140 -100 -180) +300), 
            (Math.random() * (this.gameScreen.clientHeight -60 -100) +30), 
            100, 
            50))
          }



          // Bounce defenders

             if (defenders.top > this.gameScreen.clientHeight - 30 - defenders.height){

                 defenders.direction = -1
                                      
            }
            else if (defenders.top < 30) {
            defenders.direction = 1

            }

            
        })


        // Messi scores a goal
        if (this.messi.left > this.gameScreen.clientWidth - 70 - this.messi.width){
            if (this.messi.top > 200 && this.messi.top < 380 - this.messi.height){
                this.score += 1
                this.messi.left = 80
                this.messi.top = 285
            }
        }

        

      }
    }

   