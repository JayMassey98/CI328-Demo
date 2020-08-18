class options extends Phaser.Scene {
    
    constructor() {
        
        super({ key: "options" });
    }

    create(){

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

        this.buttonBack = this.add.sprite(config.width / 2, config.height / 2, "buttonBack");

        this.buttonAttackUp = this.add.sprite(config.width, config.height / 2, "buttonAttackUp");
        this.buttonAttackDown = this.add.sprite(0, config.height / 2, "buttonAttackDown");

        this.buttonEnemyUp = this.add.sprite(config.width, config.height / 3, "buttonEnemyUp");
        this.buttonEnemyDown = this.add.sprite(0, config.height / 3, "buttonEnemyDown");

        this.buttonBack.setInteractive();
        this.buttonAttackUp.setInteractive();
        this.buttonAttackDown.setInteractive();
        this.buttonEnemyUp.setInteractive();
        this.buttonEnemyDown.setInteractive();
        
        this.title = this.add.text(30, 30, "Options", {
            
            fontFamily: 'monospace',
            fontSize: 40,
            fontStyle: 'bold',
            color: '#ffffff',
            align: 'center'
            
        });
        
        this.title.setOrigin(0, 0);

        // Start Game
        
        this.buttonBack.on("pointerup", function() {this.scene.start("menu"); }, this);

        // Player Attacks
        
        this.buttonAttackUp.on("pointerup", function() {config.bulletTime += 100; }, this);

        this.buttonAttackDown.on("pointerup", function() {
            
            if(config.bulletTime > 100) {
                
                config.bulletTime -= 100;
            }
            
        }, this);

        // Enemy Attacks
        
        this.buttonEnemyUp.on("pointerup", function() {config.enemySpawn += 100; }, this);

        this.buttonEnemyDown.on("pointerup", function() {
            
            if(config.enemySpawn > 100) {
                
                config.enemySpawn -= 100;
            }
            
        }, this);

    }

}
