class Beam extends Phaser.GameObjects.Sprite {

    constructor(scene) {

        var x = scene.player.x;
        var y = scene.player.y - 16;

        super(scene, x, y, "beam");

        scene.add.existing(this);

        this.play("beam_anim");
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 250;

        scene.projectiles.add(this);

    }

    update() {

        if (this.y < 24) {

            this.destroy();

        }
    }
}

class Explosion extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y) {
    
        super(scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
        
    }
}

class Power1 extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y) {
        
        super(scene, x, y, "Power1", "Power1");
        this.body.velocity.x = Phaser.Math.Between(-50, -100);
        this.play("Power1");
    }

    update() {

        if(this.x < 0 ) {
            this.destroy();
        }
    }
}

class Power2 extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y) {
        
        super(scene, x, y, "Power2", "Power2");
        this.body.velocity.x = Phaser.Math.Between(-50, -100);
        this.play("Power2");
    }

    update() {

        if(this.x < 0 ) {
            this.destroy();
        }
    }
}
