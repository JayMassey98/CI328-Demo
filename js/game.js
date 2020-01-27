var config = {

    type: Phaser.AUTO,
    width: 800,
    height: 800,
    backgroundColor: 0x000000,
    scene: [bootScene, playScene],
    physics: {default: "arcade"},
    pixelArt: true,
    playerSpeed: 300
    
}

var game = new Phaser.Game(config);
