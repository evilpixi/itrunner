class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene")


    }

    preload() {
        this.load.image("player", "assets/images/char.png")
        this.load.image("platform", "assets/images/platform1.png")
    }

    create() {
        this.cameras.main.setBackgroundColor(0x444444)

        this.add.image(gWidth/2, gHeight/2, "player").setScale(4).setAlpha(0.1)

        this.add.text(gWidth/2, gHeight/2-150, "IT RUNNER").setOrigin(0.5, 0.5).setScale(5)
        this.add.text(gWidth/2, gHeight/2 +104, "click to start").setOrigin(0.5, 0.5)

        this.input.on("pointerdown", ()=> {
            this.scene.start("GameScene")
        })
    }

    update() {

    }
}