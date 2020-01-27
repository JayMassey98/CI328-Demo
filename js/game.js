var config = {

    type: Phaser.AUTO,
    width: 960,
    height: 468,
    backgroundColor: 0x000000,
    scene: [bootScene, playScene],
    physics: {default: "arcade"},
    pixelArt: true,
    playerSpeed: 300
    
}

var game = new Phaser.Game(config);
