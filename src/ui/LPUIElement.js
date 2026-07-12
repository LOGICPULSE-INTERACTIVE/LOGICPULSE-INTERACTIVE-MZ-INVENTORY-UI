"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};
LOGICPULSE.UI = LOGICPULSE.UI || {};

//=============================================================================
// Base UI Element
//=============================================================================

LOGICPULSE.UI.Element = class extends PIXI.Container {

    constructor() {

        super();

        this._enabled = true;

    }

    //--------------------------------
    // Create
    //--------------------------------

    create() {

    }

    //--------------------------------
    // Refresh
    //--------------------------------

    refresh() {

    }

    //--------------------------------
    // Update
    //--------------------------------

    update() {

    }

    //--------------------------------
    // Visibility
    //--------------------------------

    show() {

        this.visible = true;

    }

    hide() {

        this.visible = false;

    }

    move(x, y) {

        this.position.set(x, y);

    }

    //--------------------------------
    // Sprite Helper
    //--------------------------------

    createSprite(folder, filename, x = 0, y = 0) {

        const sprite = LOGICPULSE.Assets.createSprite(

            folder,
            filename

        );

        sprite.position.set(x, y);

        this.addChild(sprite);

        return sprite;

    }


    //--------------------------------
    // Text Helper
    //--------------------------------

    createText(options = {}) {

        const text = new LOGICPULSE.UI.Text(options);

        this.addChild(text);

        return text;

    }

    //--------------------------------
    // State
    //--------------------------------

    enable() {

        this._enabled = true;

    }

    disable() {

        this._enabled = false;

    }

    get enabled() {

        return this._enabled;

    }

    //--------------------------------
    // Destroy
    //--------------------------------

    destroy(options = { children: true }) {

        const children = this.removeChildren();

        for (const child of children) {

            if (child.destroy) {

                child.destroy();

            }

        }

        super.destroy(options);

    }

};