let game;
let phaser;

function main() {

    var gameSettings = {

        playerSpeed: 200,
        maxPowerUps: 2,
        powerUpVelocity: 50

    }

    var config = {

        type: Phaser.AUTO,
        width: 1920,
        height: 937,
        scene: {[
                
            bootScene: bootScene,
            playScene: playScene ]},
        
        pixelArt: true,

        physics: {

            default: "arcade",
            arcade: {

                debug: false,
                debugShowVelocity: false

            }
        }
    }

    game = new Phaser.Game(config);
    
}
