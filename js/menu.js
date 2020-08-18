class menu extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "menu" });
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.buttonPlay = this.add.sprite(config.width / 2, config.height / 2 - 200, "buttonPlay");
        this.buttonOptions = this.add.sprite(config.width / 2, config.height / 2 + 200, "buttonOptions");

        this.buttonPlay.setInteractive();
        this.buttonOptions.setInteractive();
        
        this.buttonPay.scale.setTo(2, 2);
        this.buttonOptions.scale.setTo(2, 2);

        this.title = this.add.text(config.width / 2, 30, "Light Beam", {
            
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
            
        });
        
        this.title.setOrigin(0, 0);

        this.buttonPlay.on("pointerup", function() {this.scene.start("playScene"); }, this);

        this.buttonOptions.on("pointerup", function() {this.scene.start("options"); }, this);

    }

}
