/*
 * main.js
 *
 * Entrypoint for the Phaser application.
 */

import Phaser from "phaser";

import TitleScreen from "./scenes/titleScreen";


// Configure Phaser
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    pixelArt: true,
    scale: {
        mode: Phaser.Scale.NONE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: "arcade"
    },
    scene: [
        new TitleScreen("TitleScreen")
    ]
};
const game = new Phaser.Game(config);
