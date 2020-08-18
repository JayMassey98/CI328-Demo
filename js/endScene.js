class endScene extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "endScene" });
    }

    create(){

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        
        this.playButton = this.add.sprite(this.game.config.width / 2, this.game.config.height / 2, "buttonRestart");
        this.playButton.setInteractive();
        
        this.playButton.on("pointerup", function() {
            this.scene.start("menu");
        }, this);

        this.title = this.add.text(0,0, "Game Over.", {
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.title.setOrigin(0,0);

        this.scoreText = this.add.text(config.width /2 , 0, "SCORE: 0", {
            fontFamily: 'monospace',
            fontSize: 24,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        this.scoreText.setText("SCORE: " + this.score);

    }

}
