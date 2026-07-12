"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};

//=============================================================================
// Inventory State
//=============================================================================

LOGICPULSE.InventoryState = class {

    constructor() {

        this.reset();

    }

    //--------------------------------
    // Reset
    //--------------------------------

    reset() {

        this._category =

            LOGICPULSE.Constants.Category.Consumable;

        this._selectedIndex = 0;

        this._scrollRow = 0;

        this._mode = "inventory";

        this._craftAmount = 1;

    }

    //--------------------------------
    // Category
    //--------------------------------

    category() {

        return this._category;

    }

    setCategory(category) {

        this._category = category;

    }

    //--------------------------------
    // Selected Index
    //--------------------------------

    selectedIndex() {

        return this._selectedIndex;

    }

    setSelectedIndex(index) {

        this._selectedIndex = Math.max(0, index);

    }

    //--------------------------------
    // Scroll Row
    //--------------------------------

    scrollRow() {

        return this._scrollRow;

    }

    setScrollRow(row) {

        this._scrollRow = Math.max(0, row);

    }

    //--------------------------------
    // Mode
    //--------------------------------

    mode() {

        return this._mode;

    }

    setMode(mode) {

        this._mode = mode;

    }

    //--------------------------------
    // Craft Amount
    //--------------------------------

    craftAmount() {

        return this._craftAmount;

    }

    setCraftAmount(amount) {

        this._craftAmount = Math.max(1, amount);

    }

};