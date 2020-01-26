var config = {

    type: Phaser.AUTO,
    width: 1920,
    height: 937,
    backgroundColor: 0x000000,
    scene: [bootScene, playScene],
    pixelArt: true,
    
    physics: {

        default: "arcade",
        arcade: {

            debug: false,
            debugShowVelocity: false

        }
    },
    
    playerSpeed: 200,
    maxPowerUps: 2,
    powerUpVelocity: 50
}

var game = new Phaser.Game(config);
