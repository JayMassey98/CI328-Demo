let game;
let phaser;

function main() {

    var gameSettings = {

        playerSpeed: 200,
        maxPowerUps: 2,
        powerUpVelocity: 50

    };

    var config = {

        type: Phaser.AUTO,
        width: 1920,
        height: 937,
        pixelArt: true,
        physics: {

            default: "arcade",
            arcade: {

                debug: false,
                debugShowVelocity: false

            }
        },
        
        scene: {
            bootScene, playScene
        }
    }

    game = new Phaser.Game(config);
    
}
