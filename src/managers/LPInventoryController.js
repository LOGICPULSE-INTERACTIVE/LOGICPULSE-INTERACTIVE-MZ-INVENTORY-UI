"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};

//=============================================================================
// Inventory Controller
//=============================================================================

LOGICPULSE.InventoryController = class {

    //--------------------------------
    // Initialize
    //--------------------------------

    constructor(scene) {

        this._scene = scene;

    }

    //--------------------------------
    // Update
    //--------------------------------

    update() {

        this.updateGridInput();
        this.updateCategoryInput();
        this.updateConfirmInput();
        this.updateCancelInput();

    }

    //--------------------------------
    // Grid Input
    //--------------------------------

    updateGridInput() {

        const grid = this.grid();

        if (!grid) {

            return;

        }

        const B = LOGICPULSE.Bindings;

        let moved = false;

        if (LOGICPULSE.Input.isRepeated(B.MoveLeft)) {

            grid.moveLeft();
            moved = true;

        }

        else if (LOGICPULSE.Input.isRepeated(B.MoveRight)) {

            grid.moveRight();
            moved = true;

        }

        else if (LOGICPULSE.Input.isRepeated(B.MoveUp)) {

            grid.moveUp();
            moved = true;

        }

        else if (LOGICPULSE.Input.isRepeated(B.MoveDown)) {

            grid.moveDown();
            moved = true;

        }

        if (moved) {

            this.onSelectionChanged();

        }

    }

    //--------------------------------
    // Category Input
    //--------------------------------

    updateCategoryInput() {

        const B = LOGICPULSE.Bindings;

        if (LOGICPULSE.Input.isTriggered(B.NextCategory)) {

            this.nextCategory();

        }

        else if (LOGICPULSE.Input.isTriggered(B.PreviousCategory)) {

            this.previousCategory();

        }

    }

    //--------------------------------
    // Confirm Input
    //--------------------------------

    updateConfirmInput() {

        if (

            LOGICPULSE.Input.isTriggered(

                LOGICPULSE.Bindings.Confirm

            )

        ) {

            this.onConfirm();

        }

    }

    //--------------------------------
    // Cancel Input
    //--------------------------------

    updateCancelInput() {

        if (

            LOGICPULSE.Input.isTriggered(

                LOGICPULSE.Bindings.Cancel

            )

        ) {

            this.onCancel();

        }

    }

    //--------------------------------
    // Selection Changed
    //--------------------------------

    onSelectionChanged() {

        if (this._scene.onSelectionChanged) {

            this._scene.onSelectionChanged();

        }

    }

    //--------------------------------
    // Confirm
    //--------------------------------

    onConfirm() {

        if (this._scene.onConfirm) {

            this._scene.onConfirm();

        }

    }

    //--------------------------------
    // Cancel
    //--------------------------------

    onCancel() {

        if (this._scene.onCancel) {

            this._scene.onCancel();

        }

    }

    //--------------------------------
    // Next Category
    //--------------------------------

    nextCategory() {

        // Will be implemented when Sidebar is finished.

    }

    //--------------------------------
    // Previous Category
    //--------------------------------

    previousCategory() {

        // Will be implemented when Sidebar is finished.

    }

    //--------------------------------
    // Scene
    //--------------------------------

    scene() {

        return this._scene;

    }

    //--------------------------------
    // Grid
    //--------------------------------

    grid() {

        return this.scene()._grid;

    }

    //--------------------------------
    // Sidebar
    //--------------------------------

    sidebar() {

        return this.scene()._sidebar;

    }

    //--------------------------------
    // Showcase
    //--------------------------------

    showcase() {

        return this.scene()._showcase;

    }

};