/*
 * titleScreen.js
 *
 * The title screen scene.
 */

import Phaser from "phaser";


// Title Screen Scene
export default class TitleScreen extends Phaser.Scene {
    init() {
        // Initialize scene variables here
    }

    preload() {
        // Preload resources such as fonts, images, and audio files here
    }

    create() {
        // Create scene content here
        this.add.text(0, 300 - 32 / 2, "Hello World!", {
            fontSize: 32,
            fixedWidth: 800,
            fixedHeight: 32,
            align: "center"
        });
    }

    update(time, delta) {
        // This code will be executed once per frame
    }
}
