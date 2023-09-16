window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
    let game
  
    function startGame() {
      game = new Game()
      game.start()
    }
    startButton.addEventListener('click', function () {
        startGame()
      })

    document.addEventListener('keydown', event => {
        if (event.code === 'KeyA'){
            game.messi.directionX = -2
        }
        else if (event.code === 'KeyD'){
            game.messi.directionX = 2
        }  
        
        if (event.code === 'KeyW'){
            game.messi.directionY = -2
        }
        else if (event.code === 'KeyS'){
            game.messi.directionY = 2
        }  
    })

    document.addEventListener('keyup', event => {
        if (event.code === 'KeyA'){
            game.messi.directionX = 0
        }
        else if (event.code === 'KeyD'){
            game.messi.directionX = 0
        }

        if (event.code === 'KeyW'){
            game.messi.directionY = 0
        }
        else if (event.code === 'KeyS'){
            game.messi.directionY = 0
        }
    })
    
})