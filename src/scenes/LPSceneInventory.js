"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};
LOGICPULSE.Scenes = LOGICPULSE.Scenes || {};

//=============================================================================
// Inventory Scene
//=============================================================================

LOGICPULSE.Scenes.Inventory = class extends Scene_MenuBase {

    initialize() {

        super.initialize();

    }

    create() {

        super.create();

        this.createBackground();
        this.createSidebar();
        this.createShowcase();
        this.createGrid();



    }

    createBackground() {

        const background = LOGICPULSE.Assets.createSprite(

            LOGICPULSE.Assets.Folders.Inventory,
            "Background"

        );

        background.x = 0;
        background.y = 0;

        this.addChild(background);

    }

    createSidebar() {

        this._sidebar = new LOGICPULSE.UI.Sidebar();

        this.addChild(this._sidebar);

    }

    createShowcase() {

        this._showcase = new LOGICPULSE.UI.Showcase();

        this.addChild(this._showcase);

    }

    createGrid() {

        this._grid = new LOGICPULSE.UI.Grid(

            LOGICPULSE.Layout.Inventory.Grid

        );

        this.addChild(this._grid);

    }

    update() {

        super.update();

        this.updateGridInput();

    }

    //--------------------------------
    // Grid Input
    //--------------------------------

    updateGridInput() {

        if (Input.isRepeated("right")) {

            this._grid.moveRight();

            this.onSelectionChanged();

        }

        else if (Input.isRepeated("left")) {

            this._grid.moveLeft();

            this.onSelectionChanged();

        }

        else if (Input.isRepeated("down")) {

            this._grid.moveDown();

            this.onSelectionChanged();

        }

        else if (Input.isRepeated("up")) {

            this._grid.moveUp();

            this.onSelectionChanged();

        }

    }

    //--------------------------------
    // Selection Changed
    //--------------------------------

    onSelectionChanged() {

        const entry = this._grid.selectedEntry();

        if (!entry) {

            return;

        }

        console.log(

            entry.item.name

        );

    }

};