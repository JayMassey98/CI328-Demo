class Systems extends Phaser.GameObjects.Sprite {
    
    constructor(scene, x, y, key, type) {
        
        super(scene, x, y, key);
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.world.enableBody(this, 0);
        this.setData("type", type);
    }
    
}

class Beam extends Systems {

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

class Explosion extends Systems {

    constructor(scene, x, y) {
    
        super(scene, x, y, "explosion");
        scene.add.existing(this);
        this.play("explode");
        
    }
}

class Power1 extends Systems {
    
    constructor(scene, x, y) {
        
        super(scene, x, y, "power_1");
        this.body.velocity.x = Phaser.Math.Between(-50, -100);
        this.play("power_1");
    }

    update() {

        if(this.x < 0 ) {
            this.destroy();
        }
    }
}

class Power2 extends Systems {
    
    constructor(scene, x, y) {
        
        super(scene, x, y, "power_2");
        this.body.velocity.x = Phaser.Math.Between(-50, -100);
        this.play("power_2");
    }

    update() {

        if(this.x < 0 ) {
            this.destroy();
        }
    }
}
