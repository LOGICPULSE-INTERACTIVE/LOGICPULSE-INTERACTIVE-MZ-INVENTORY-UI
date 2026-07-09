"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};
LOGICPULSE.UI = LOGICPULSE.UI || {};

//=============================================================================
// Sidebar
//=============================================================================

LOGICPULSE.UI.Sidebar = class extends LOGICPULSE.UI.Element {

    constructor() {

        super();

        this.create();

    }

    create() {

        this.createBackground();

        this.createTabs();

    }

    createBackground() {

        this._background =
            LOGICPULSE.Assets.createSprite(

                LOGICPULSE.Assets.Folders.Sidebar,
                "Sidebar box"

            );

        this.addChild(this._background);

    }

    createTabs() {

        this._tabs = [];

        const tabNames = [

            "Consumable",
            "Material",
            "Key Materials",
            "Synthesizer"

        ];

        for (const name of tabNames) {

            const sprite =
                LOGICPULSE.Assets.createSprite(

                    LOGICPULSE.Assets.Folders.Sidebar,
                    `Sidebar ${name} Tab Idle`

                );

            this._tabs.push(sprite);

            this.addChild(sprite);

        }

    }

};