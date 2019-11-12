let game;
let phaser;
let world;

let input;
let ui;
let audio;

function main() {

    var config = {

        type: Phaser.AUTO,
        width: 1920,
        height: 937,

        // centre block: width: 968,
        // left block: width: 476 // (1920-968)/2
        // right block: width: 476 // (1920-968)/2

        // needs to be scaleable based on current screen size
        // centre block needs to always remain the same ratio

        scene: {

            preload: preload,
            create: create,
            update: update
        },

        render: {

            pixelArt: true
        }

    };

    phaser = new Phaser.Game(config);
}

/*
    The first thing to be called.
    Loads assets.
*/

function preload() {

    game = this;
    game.score = 0;

    this.load.image('background_image', 'assets/images/background_image.png');
    // this.load.audio('intro_sound', 'assets/audio/intro_sound.mp3');
    // this.load.audio('continuous_audio', 'assets/audio/continuous_audio.mp3');
    // this.load.audio('button_interact', 'assets/audio/button_interact.mp3');

}

/*
    Initialize the game.
    The assets have been loaded by this point.
*/

function create() {

    input = new Input();
    ui = new UI();
    audio = new Audio();

    this.add.image(0, 0, 'background_image').setOrigin(0, 0);
    this.add.audio

    pauseGameForInput();

    game.input.on('pointerdown', startGame);
}

function pauseGameForInput() {

    game.paused = true;
    ui.showStartText();
}

function resumeGameFromInput() {

    ui.disableStartText();
    game.paused = false;
}

function startGame() {

    if (!game.paused)
        return;

    game.time.addEvent({ delay: 4000, repeat: -1, callback: spawnEnemies });
    setScore(0);
    resumeGameFromInput();
}

function update() {

    input.update();
    world.update();
}

function setScore(value) {

    game.score = value;
    ui.updateScoreText(value);
}

function gameOver() {

    world.cleanup();
    pauseGameForInput();
}