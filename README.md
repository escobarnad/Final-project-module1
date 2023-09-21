# Messi: Greatest player of all time

[Click here to see deployed game](https://escobarnad.github.io/Final-project-module1/)

## Description
### **Goal of the game:**
It’s a football match. You have to take the player to the finish line and score goals. Avoid the defenders since they will take your lives.

### **How does it work?**
Using W-A-S-P on your keyboard, move the player through the field. You have to dodge the defenders and score 5 goals to win. If the defenders get you 3 times, you lose.


## MVP

- There is a start-game screen with instructions on how to use the game.
- The player changes directions by using W-A-S-D on your keyboard.
- There are defenders moving down in the field.
- The defenders appear at random placements. Both horizontally and vertically.
- The game ends when you win or you lose. 
- You lose when the defenders collide with the player and you lose your 3 lifes. 
- You win when you score 5 goals.
- There is an end-game screen


## Backlog

- ~~Make 6 defenders bounce up and down on their own.~~
- ~~Make defenders reappear closer to the goal line whenever they collide with the player adding difficulty to the game~~
- ~~Add sound to the game-screen.~~
- ~~Have 2 different screens for losing or winning.~~
- Add a different sound when the player scores the goal.
- The player could also shoot the ball from distance.


## Data structure

### scrip.js

- window.addEventListener(load)
- startGame()
- startButton.addEventListener()
- restartButton.addEventListener()
- document.addEventListener(keydown)
- document.addEventListener(keyup)

### game.js

- class Game ()
    - this.startScree
    - this.gameContainer
    - this.gameScreen
    - this.gameEndScreen
    - this.height
    - this.width
    - this.messi
    - this.defenders
    - this.score
    - this.lives
    - this.gameOverLose
    - this.gameOverWin
    - this.winScreen
    - this.loseScreen
    - this.audioCrowd
- start()
- gameLoop()
- update()

### messi.js

- class Messi()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.directionX
    - this.directionY
    - this.player
- move ()
- updatePosition ()
- didCollide(defenders)

### defenders.js

- class Defenders ()
    - this.gameScreen
    - this.left
    - this.top
    - this.height
    - this.width
    - this.player
    - this.direction
    - this.player
- updatePosition ()


## States y States Transitions

- Start-game screen
- Game screen
- Game-over screen


## Links

- [Deployment Link](https://escobarnad.github.io/Final-project-module1/)