function main() {

    var config = {
        type: Phaser.AUTO,
        width: 1920,
        height: 1080,
        scene: {
            create: create
        }
    };

    var game = new Phaser.Game(config);
}

function create() {
    var text = this.add.text(50, 50, "Phaser is working!", { fontSize: '32px', fill: '#FFF' });
}
