class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene")


    }

    preload() {
        this.load.image("player", "assets/images/char.png")
        this.load.image("platform", "assets/images/platform1.png")
    }

    create() {
        this.scene.start("GameScene")
    }

    update() {

    }
}