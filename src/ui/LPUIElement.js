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

    show() {

        this.visible = true;

    }

    hide() {

        this.visible = false;

    }

    enable() {

        this._enabled = true;

    }

    disable() {

        this._enabled = false;

    }

    get enabled() {

        return this._enabled;

    }

    refresh() {

    }

    destroy(options) {

        super.destroy(options);

    }

};