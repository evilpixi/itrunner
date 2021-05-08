class GameOverScene extends Phaser.Scene {
    constructor() {
        super("GameOverScene")


    }

    preload() {

    }

    create() {
        this.add.text(gWidth/2, gHeight/2, "Game Over :(").setOrigin(0.5, 0.5)
        this.add.text(gWidth/2, gHeight/2 +100, "click to restart").setOrigin(0.5, 0.5)

        this.input.on("pointerdown", ()=> {
            this.scene.start("GameScene")
        })
    }

    update() {

    }
}