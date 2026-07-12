"use strict";

window.LOGICPULSE = window.LOGICPULSE || {};
LOGICPULSE.UI = LOGICPULSE.UI || {};

//=============================================================================
// Text
//=============================================================================

LOGICPULSE.UI.Text = class extends Sprite {

    constructor(options = {}) {

        super();

        this._width = options.width ?? 100;
        this._height = options.height ?? 32;

        this.bitmap = new Bitmap(
            this._width,
            this._height
        );

        this.bitmap.fontFace =
            options.fontFace ?? $gameSystem.mainFontFace();

        this.bitmap.fontSize =
            options.fontSize ?? 20;

        this.bitmap.textColor =
            options.textColor ?? "#FFFFFF";

        this.bitmap.outlineColor =
            options.outlineColor ?? "rgba(0,0,0,0.8)";

        this.bitmap.outlineWidth =
            options.outlineWidth ?? 4;

        this._align =
            options.align ?? "left";

        this._padding =
            options.padding ?? 0;

        this._lineHeight =
            options.lineHeight ??
            (this.bitmap.fontSize + 6);

        this.move(
            options.x ?? 0,
            options.y ?? 0
        );

        this.setText(
            options.text ?? ""
        );

    }

    //--------------------------------
    // Set Text
    //--------------------------------

    setText(text) {

        text = String(text);

        if (this._text === text) {

            return;

        }

        this._text = text;

        this.refresh();

    }

    //--------------------------------
    // Refresh
    //--------------------------------

    refresh() {

        this.bitmap.clear();

        const lines = this.wrapText(this._text);

        let y = this._padding;

        for (const line of lines) {

            this.bitmap.drawText(

                line,

                this._padding,

                y,

                this._width - this._padding * 2,

                this._lineHeight,

                this._align

            );

            y += this._lineHeight;

        }

    }

    //--------------------------------
    // Word Wrap
    //--------------------------------

    wrapText(text) {

        if (!text) {

            return [];

        }

        const maxWidth =
            this._width - this._padding * 2;

        const words = text.split(" ");

        const lines = [];

        let line = "";

        for (const word of words) {

            const test =
                line ? line + " " + word : word;

            const width =
                this.bitmap.measureTextWidth(test);

            if (

                width > maxWidth &&
                line.length > 0

            ) {

                lines.push(line);

                line = word;

            }

            else {

                line = test;

            }

        }

        if (line.length > 0) {

            lines.push(line);

        }

        return lines;

    }

    //--------------------------------
    // Text
    //--------------------------------

    text() {

        return this._text;

    }

};