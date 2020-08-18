class options extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "options" });
    }

    create(){

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.playButton = this.add.sprite(config.width / 2, config.height / 2, "button");

        this.attackUp = this.add.sprite(config.width, config.height / 2, "button");
        this.attackDown = this.add.sprite(0, config.height / 2, "button");

        this.enemyUp = this.add.sprite(config.width, config.height/3, "button");
        this.enemyDown = this.add.sprite(0, config.height / 3, "button");

        this.playButton.setInteractive();
        this.attackUp.setInteractive();
        this.attackDown.setInteractive();
        this.enemyUp.setInteractive();
        this.enemyDown.setInteractive();
        
        this.title = this.add.text(0, 0, "Option", {
            
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
        });
        
        this.title.setOrigin(0,0);

        // Start Game
        
        this.playButton.on("pointerup", function() {this.scene.start("menu"); }, this);

        // Player Attacks
        
        this.attackUp.on("pointerup", function() {config.bulletTime += 100; }, this);

        this.attackDown.on("pointerup", function() {
            
            if(config.bulletTime > 100) {
                
                config.bulletTime -= 100;
            }
            
        }, this);

        // Enemy Attacks
        
        this.enemyUp.on("pointerup", function() {config.enemySpawn += 100; }, this);

        this.enemyDown.on("pointerup", function() {
            
            if(config.enemySpawn > 100) {
                
                config.enemySpawn -= 100;
            }
            
        }, this);

    }

}
