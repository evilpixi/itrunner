var gWidth =  800
var gHeight = 600
var debug = 0

const game = new Phaser.Game({
    width: gWidth,
    height: gHeight,
    type: Phaser.AUTO,
    roundPixels: true,
    scale: {
        parent: 'gameContainer',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: gWidth,
        height: gHeight
    },
    autoStart: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: debug,
            gravity: {y: 3000}
        }
    }
})

game.scene.add("BootScene", BootScene)
game.scene.add("GameScene", GameScene)
game.scene.add("GameOverScene", GameOverScene)

game.scene.start("BootScene")