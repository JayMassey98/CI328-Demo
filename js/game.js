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
    
    playerSpeed: 300,
    maxPowerUps: 10,
    powerUpVelocity: 100
    
}

var game = new Phaser.Game(config);
