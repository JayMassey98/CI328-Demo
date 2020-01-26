var gameSettings = {

    playerSpeed: 200,
    maxPowerUps: 2,
    powerUpVelocity: 50

}

var config = {

    type: Phaser.AUTO,
    width: 1920,
    height: 937,
    pixelArt: true,
    scene: [bootScene, playScene],
    physics: {

        default: "arcade",
        arcade: {

            debug: false,
            debugShowVelocity: false

        }
    }
}

var game = new Phaser.Game(config);
