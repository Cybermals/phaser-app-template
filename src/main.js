/*
 * main.js
 *
 * Entrypoint for the Phaser application.
 */

import Phaser from "phaser";

import TitleScreen from "./scenes/titleScreen";


// Configure Phaser
const config = {
    parent: "root",
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
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
