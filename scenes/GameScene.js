class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene")

        this.status = {
            speed: 0,
            acceleration: 4,
            maxSpeed: 600,
            jumpSpeed: 2500,
            maxGravitySpeed: -800
        }
        this.levelLenght = 5000

        this.player
        this.platforms
        this.platformElements = []
        this.platformAmount = 9

        this.debugtext

        this.holeCount
    }

    preload() {

    }

    create() {
        this.cameras.main.setBackgroundColor(0xbababa)



        
        this.platforms = this.physics.add.staticGroup();
        this.holeCount = 0

        for (let i = 0; i < this.platformAmount; i++) {
            if (true) {
                let p = this.platforms.create(50 + i * 100, 500, "platform")
                this.platformElements.push(p)
            }
            
        }

        // player
        this.player = this.physics.add.image(70, 420, "player")
        this.player.setVelocityX(0)
        this.player.setVelocityY(0)
        this.status.speed = 0

        this.physics.add.collider(this.player, this.platforms);
        

        // controls
        this.input.on("pointerdown", ()=> {
            if (this.player.body.touching.down) {
                this.player.setVelocityY(-this.status.jumpSpeed)
            }
        })

        this.add.text(gWidth/2, gHeight/2, "CLICK TO JUMP").setScale(3)

        this.debugtext = this.add.text(20, 20, "").setScrollFactor(0)
    }

    createNewPlatform() {
        this.add.image()
    }

    update(time, delta) {
        // accelerate
        if (this.status.speed < this.status.maxSpeed) {
            this.status.speed += this.status.acceleration
        }

        // gravity correction
        if (this.player.body.velocity.y < this.status.maxGravitySpeed) this.player.body.velocity.y = this.status.maxGravitySpeed



        this.player.setVelocityX(this.status.speed)

        this.cameras.main.scrollX = this.player.x -170

        // death
        if (this.player.y > gHeight) {
            if (debug) {
                this.scene.pause()
            }
            else {
                this.scene.start("GameOverScene")
            }
        }

        // debug
        if (debug) this.debugtext.setText(`time:${time}\ndelta:${delta}\nplayerx: ${this.player.x}\ncameraX: ${this.cameras.main.scrollX}\nstatusSpeed: ${this.status.speed}\nplayerSpeed: ${this.player.body.velocity.x}`)

        // recycle elements
        for (let p of this.platformElements) {

            if (p.x < this.player.x - 200 && p.body) {

                p.x += 100*this.platformAmount
                p.body.x = p.body.x + 100*this.platformAmount

                if (p.alpha == 0) {
                    p.alpha = 1
                    p.body.enable = 1

                    this.holeCount--
                }

                if (Math.random() <= 0.1 && this.holeCount <= 2) {
                    p.alpha=0
                    p.body.enable = 0

                    this.holeCount++
                }
            }
        }
    }
}