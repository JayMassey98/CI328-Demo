function main() {

    var config = {
        type: Phaser.AUTO,
        width: 1600,
        height: 900,
        scene: {
            create: create
        }
    };

    var game = new Phaser.Game(config);
}

function create() {
    var text = this.add.text(200, 200, "Phaser is working!", { fontSize: '32px', fill: '#FFF' });
}
