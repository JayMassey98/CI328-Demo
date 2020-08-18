class menu extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "menu" });
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.buttonPlay = this.add.sprite(config.width / 2, config.height / 2, "buttonPlay");
        this.option = this.add.sprite(config.width / 2, config.height / 3, "buttonOption");

        this.buttonPlay.setInteractive();
        this.option.setInteractive();

        this.title = this.add.text(0,0, "Light Beam", {
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        
        this.title.setOrigin(0,0);

        this.buttonPlay.on("pointerup", function() {
            this.scene.start("playScene");
        }, this);

        this.option.on("pointerup", function() {
            this.scene.start("options");
        }, this);

    }

}
