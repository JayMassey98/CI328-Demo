import { CST } from "../CST";
import { MenuScene } from "./MenuScene";

export class LoadScene extends Phaser.Scene {

    constructor() {

        super({

            key: CST.SCENES.LOAD
        })
    }

    init() {

    }

    preload() {

        // load image, spritesheet and sound

        this.load.image("title_background", "./assets/title_background.jpg");
        this.load.image("options_button", "./assets/options_button.jpg");
        this.load.image("play_button", "./assets/play_button.jpg");
        this.load.image("logo", "./assets/logo.jpg");

        this.load.spritesheet("cat", "./assets/cat.png", {
            frameHeight: 32,
            frameWidth: 32
        });

        this.load.audio("title_music", "./assets/shuinvy_childhood.mp3");

        // create loading bar

        let loadingBar = this.add.graphics ({
            fillStyle: {
                color: 0xffffff // white
            }
        })

        /*
        Loader Events:
            complete - when done loading everything
            progress - loader number progress in decimal

        // simulate large load

        for (let i = 0; i < 100; i++) {
            this.load.spritesheet("cat" + i, "./assets/cat.png", {
                frameHeight: 32,
                frameWidth: 32
            });
        }
        */

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        })

        this.load.on("complete"), () => {
        //        this.scene.start(CST.SCENES.MENU, "hello from load scene");
        }
    }

    create() {

        this.scene.start(CST.SCENES.MENU, "hello from load scene");
    }
}